import { Prisma } from "@prisma/client";
import { db } from "../services/prisma";

class Reports {
  static async new(
    userId: string, 
    data: Prisma.ReportCreateInput, 
    locals: Prisma.Enumerable<Prisma.LocalCreateOrConnectWithoutReportInput>,
    ageGroups: Prisma.Enumerable<Prisma.AgeGroupCreateOrConnectWithoutReportInput>
  ) {
    const newReport = await db.report.create({
      data: {
        ...data,
        locals: {
          connectOrCreate: locals
        },
        ageGroups: {
          connectOrCreate: ageGroups
        },
        reportBy: {
          connect: {
            id: userId
          }
        }
      }, 
      include: {
        reportBy: {
          select: {
            uf: true,
            city: true
          }
        }
      }
    });

    const firstsReports = await db.report.findMany({
      take: 12,
      orderBy: {
        reportAt: "asc"
      },
      where: {
        reportBy: {
          uf: newReport.reportBy.uf,
          city: newReport.reportBy.city
        }
      }
    });

    await db.report.deleteMany({
      where: {
        AND: [
          {
            reportBy: {
              uf: newReport.reportBy.uf,
              city: newReport.reportBy.city
            }
          },
          {
            id: {
              notIn: firstsReports.map(r => r.id)
            }
          }
        ]
      }
    });

    return newReport;
  };

  static async getById(id: string) {
    return await db.report.findFirst({
      where: {
        id
      },
      include: {
        ageGroups: true,
        locals: true,
        reportBy: {
          select: {
            name: true
          }
        }
      }
    });
  };

  static async getByCity(uf: string, city: string) {
    return await db.report.findFirst({
      where: {
        reportBy: {
          uf,
          city
        }
      },
      include: {
        ageGroups: true,
        locals: true,
        reportBy: {
          select: {
            name: true
          }
        }
      }
    });
  };
};

export { Reports };
