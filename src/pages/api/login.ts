import Cookies from "cookies";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../controllers/Users";
import UnauthorizedError from "../../errors/Unauthorized";
import { Handler } from "../../services/handler";

async function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.query;

  if(typeof email !== "string" || typeof password !== "string") {
    throw new UnauthorizedError();
  };

  const user = await Users.getByCredentials(email, password);

  if(!user) {
    throw new UnauthorizedError();
  };

  const token = jwt.sign(user, process.env.SECRET!, {
    expiresIn: "1d"
  });

  const cookie = new Cookies(req, res);
  cookie.set("token", token);

  return res.status(200).json({
    token
  });
};

export default Handler.request({
  "GET": login
});