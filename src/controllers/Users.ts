import { Prisma } from "@prisma/client";
import { Crypto } from "../services/crypto";
import { db } from "../services/prisma";

class Users {
  static async create(data: Prisma.UserCreateInput) {
    const password = await Crypto.encrypt(data.password);

    return await db.user.create({
      data: {
        ...data,
        password,
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
    const user = await db.user.findFirst({
      where: {
        email
      }
    });

    if(user) {
      const passwordIsValid = await Crypto.compare(password, user.password);

      if(passwordIsValid) {
        return user;
      };
    };

    return null;
  };
};

export { Users };
