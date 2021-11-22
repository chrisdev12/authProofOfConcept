import { UserRequest } from "../models/authUser";

export default interface IAuthService {
    signUp(user : UserRequest): Promise<string>;
    signIn(user : UserRequest) : Promise<string>
}