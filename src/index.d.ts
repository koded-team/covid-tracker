
type _NextApiRequest = import("next").NextApiRequest;
type User = import("@prisma/client").User;

declare interface ApiRequest extends _NextApiRequest {
  user?: User;
  token?: string;
};