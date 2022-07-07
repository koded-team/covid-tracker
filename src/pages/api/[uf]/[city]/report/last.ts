import { NextApiRequest, NextApiResponse } from "next";
import { Reports } from "../../../../../controllers/Reports";
import NotFoundError from "../../../../../errors/NotFound";
import { Handler } from "../../../../../services/handler";

async function getByCity(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uf, city } = req.query;

  if(typeof uf !== "string" || typeof city !== "string") {
    throw new NotFoundError();
  };

  const report = await Reports.getByCity(uf, city);

  if(!report) {
    throw new NotFoundError();
  };

  return res.status(200).json(report);
};

export default Handler.request({
  "GET": getByCity
});