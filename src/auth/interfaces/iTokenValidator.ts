import { AccessToken } from "../models/authSession";

export default interface ITokenValidator {
  verifyToken(token: AccessToken): Promise<boolean>;
}
