import { NextApiRequest, NextApiResponse } from "next";
import { Reports } from "../../../../../controllers/Reports";
import NotFoundError from "../../../../../errors/NotFound";
import { Handler } from "../../../../../services/handler";

async function getById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uf, city, id } = req.query;

  if(typeof id !== "string" || typeof uf !== "string" || typeof city !== "string") {
    throw new NotFoundError();
  };

  const report = await Reports.getById(id, uf, city);

  if(!report) {
    throw new NotFoundError();
  };

  return res.status(200).json(report);
};

async function deleteById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uf, city, id } = req.query;

  if(typeof id !== "string" || typeof uf !== "string" || typeof city !== "string") {
    throw new NotFoundError();
  };

  const report = await Reports.deleteById(id, uf, city);

  if(!report) {
    throw new NotFoundError();
  };

  return res.status(200).json(report);
};

export default Handler.request({
  "GET": getById,
  "DELETE": deleteById
});