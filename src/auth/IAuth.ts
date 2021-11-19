import UserRequest from "./models/newUser";

export default interface UserAuthorization {
    signUp(user : UserRequest): Promise<string>;
    signIn(user : UserRequest) : Promise<string>
}