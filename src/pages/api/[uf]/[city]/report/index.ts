import { NextApiRequest, NextApiResponse } from "next";
import { Reports } from "../../../../../controllers/Reports";
import NotFoundError from "../../../../../errors/NotFound";
import { Handler } from "../../../../../services/handler";

async function create(
  req: ApiRequest,
  res: NextApiResponse
) {
  const authorizedUser = req.user;
  const data = req.body;

  const report = await Reports.create(String(authorizedUser?.id), data?.report, data?.locals, data?.ageGroups);

  return res.status(201).json(report);
};

async function getAllByCity(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uf, city } = req.query;

  if(typeof uf !== "string" || typeof city !== "string") {
    throw new NotFoundError();
  };

  const reports = await Reports.getAllByCity(uf, city);

  if(!reports) {
    throw new NotFoundError();
  };

  return res.status(200).json(reports);
};

export default Handler.request({
  "GET": getAllByCity,
  "POST": await Handler.auth(create)
});