import { AuthSession } from "../models/authSession";
import { RefreshSession, UserRequest } from "../models/authUser";

export default interface IAuth {
  register(user: UserRequest): Promise<string>;
  login(user: UserRequest): Promise<AuthSession>;
  refreshSession(refeshToken: RefreshSession): Promise<AuthSession>;
}
