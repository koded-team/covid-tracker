import { NextApiResponse } from "next";
import { Users } from "../../../../../controllers/Users";
import NotFoundError from "../../../../../errors/NotFound";
import UnauthorizedError from "../../../../../errors/Unauthorized";
import { Handler } from "../../../../../services/handler";

async function get(
  req: ApiRequest,
  res: NextApiResponse
) {
  const authorizedUser = req.user;
  const { id } = req.query;

  const user = await Users.getById(String(id));

  if(!user) {
    throw new NotFoundError();
  } else if(
    authorizedUser?.access !== "MASTER" &&
    authorizedUser?.id !== id
  ) {
    throw new UnauthorizedError();
  };
 
  return res.status(200).json(user);
};

async function update(
  req: ApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const { id } = req.query;

  const user = await Users.getById(String(id));

  if(!user) {
    throw new NotFoundError();
  };

  const updatedUser = await Users.updateById(String(id), data);

  return res.status(200).json(updatedUser);
};

async function remove(
  req: ApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const user = await Users.getById(String(id));

  if(!user) {
    throw new NotFoundError();
  };

  await Users.deleteById(String(id));

  return res.status(200).send("");
};

export default Handler.request({
  "GET": await Handler.auth(get),
  "PUT": await Handler.auth(update, "MASTER"),
  "DELETE": await Handler.auth(remove, "MASTER")
});