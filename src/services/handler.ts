import jwt from "jsonwebtoken";
import { NextApiResponse } from "next";
import UnauthorizedError from "../errors/Unauthorized";

class Handler {
  static request(
    methods: { [method: string]: (
      req: ApiRequest,
      res: NextApiResponse,
    ) => Promise<any> }
  ) {
    return async (
      req: ApiRequest,
      res: NextApiResponse,
    ) => {
      try {
        const method = req.method;
        return await methods[method || "GET"](req, res);
      } catch (error: any) {
        return res.status(200).json({
          status: error?.statusCode,
          message: error?.message
        });
      };
    };
  };

  static async auth(
    callback: (req: ApiRequest, res: NextApiResponse) => Promise<any>,
    access: "NORMAL" | "MASTER" = "NORMAL"
  ) {
    return async(
      req: ApiRequest, 
      res: NextApiResponse
    ) => {
      const { uf, city } = req.query;
      const token = req.cookies["token"];
      
      try {
        const user: User = jwt.verify(token || "", process.env.SECRET!) as User;

        if(
          !user || 
          (access === "MASTER" && user.access !== access) ||
          (user.access !== "MASTER" && user.access !== "NORMAL") || 
          !(user.uf === uf && user.city === city)
        ) {
          throw new UnauthorizedError();
        };

        req.token = token;
        req.user = user;
  
        return await callback(req, res);
      } catch (error) {
        throw new UnauthorizedError();
      };
    };
  };
};

export { Handler };
