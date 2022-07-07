import { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../../../../controllers/Users";
import UnauthorizedError from "../../../../../errors/Unauthorized";
import { Handler } from "../../../../../services/handler";

async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { auth } = req.query;

  if(auth !== process.env.SECRET || !process.env.SECRET) {
    throw new UnauthorizedError();
  };

  const data = req.body;
  const user = await Users.create(data, "MASTER");

  return res.status(201).json(user);
};

export default Handler.request({
  "POST": create
});