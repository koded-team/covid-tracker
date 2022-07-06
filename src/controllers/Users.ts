import { Prisma } from "@prisma/client";
import { db } from "../services/prisma";

class Users {
  static async create(data: Prisma.UserCreateInput) {
    return await db.user.create({
      data: {
        ...data,
        access: "NORMAL"
      }
    });
  };

  static async deleteById(id: string) {
    return await db.user.delete({
      where: {
        id
      }
    });
  };

  static async updateById(id: string, data: Prisma.UserUpdateInput) {
    return await db.user.update({
      data,
      where: {
        id
      }
    });
  };

  static async getById(id: string) {
    return await db.user.findFirst({
      where: {
        id
      }
    });
  };

  static async getByCity(uf: string, city: string) {
    return await db.user.findFirst({
      where: {
        uf,
        city
      }
    });
  };

  static async getByCredentials(email: string, password: string) {
    return await db.user.findFirst({
      where: {
        email,
        password
      }
    });
  };
};

export { Users };
