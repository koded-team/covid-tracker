import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../../../../controllers/Users";
import NotFoundError from "../../../../../errors/NotFound";
import { Handler } from "../../../../../services/handler";

async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const user = await Users.create(data);

  const token = jwt.sign(user, "temporary", {
    expiresIn: "1d"
  });

  return res.status(200).json({
    token
  });
};

async function getByCity(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uf, city } = req.query;

  if(typeof uf !== "string" || typeof city !== "string") {
    throw new NotFoundError();
  };

  const user = await Users.getByCity(uf, city);

  if(!user) {
    throw new NotFoundError();
  };

  return res.status(201).json(user);
};

export default Handler.request({
  "GET": await Handler.auth(getByCity, "MASTER"),
  "POST": await Handler.auth(create, "MASTER")
});