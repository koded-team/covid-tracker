import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../controllers/Users";
import UnauthorizedError from "../../errors/Unauthorized";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.query;

    if(typeof email !== "string" || typeof password !== "string") {
      throw new UnauthorizedError();
    };

    const user = await Users.getByCredentials(email, password);

    if(!user) {
      throw new UnauthorizedError();
    };

    const token = jwt.sign(user, "temporary", {
      expiresIn: "1d"
    });

    return res.status(200).json({
      token
    });
  } catch (error: any) {
    return res.status(200).json({
      status: error?.statusCode,
      message: error?.message
    });
  };
};