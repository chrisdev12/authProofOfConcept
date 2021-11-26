/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CognitoUserPool,
  ICognitoUserPoolData,
  AuthenticationDetails,
  CognitoUser,
  ICognitoUserData,
  CognitoRefreshToken,
} from "amazon-cognito-identity-js";
import IAuth from "../interfaces/iAuth";
import { RefreshSession, UserRequest } from "../models/authUser";
import dotenv from "dotenv";
import { AuthSession } from "../models/authSession";

dotenv.config();

export default class CognitoService implements IAuth {
  private provider: CognitoUserPool;
  private userPoolId: string = process.env.UserPoolID || "";
  private clientId: string = process.env.ClientId || "";

  constructor() {
    const poolData: ICognitoUserPoolData = {
      UserPoolId: this.userPoolId,
      ClientId: this.clientId,
    };
    this.provider = new CognitoUserPool(poolData);
  }

  register(newUser: UserRequest): Promise<string> {
    return new Promise<any>((resolve, reject) => {
      this.provider.signUp(
        newUser.email,
        newUser.password,
        [],
        [],
        (err, result: any) => {
          if (err) {
            console.log(err);
            return reject(err);
          }
          const cognitoUser = result.user;
          console.log(result);
          console.log(cognitoUser);
          console.log("user name is " + cognitoUser.getUsername());

          return resolve(cognitoUser);
        }
      );
    });
  }

  login(user: UserRequest): Promise<AuthSession> {
    const authDetails = new AuthenticationDetails({
      Username: user.email,
      Password: user.password,
    });
    const userData: ICognitoUserData = {
      Username: user.email,
      Pool: this.provider,
    };
    const cognitoUser = new CognitoUser(userData);

    return new Promise<AuthSession>((resolve, reject) => {
      cognitoUser.authenticateUser(authDetails, {
        onSuccess: (result) => {
          const authSession: AuthSession = {
            accessToken: result.getAccessToken().getJwtToken(),
            refreshToken: result.getRefreshToken().getToken(),
            idToken: result.getIdToken().getJwtToken(),
          };

          return resolve(authSession);
        },
        onFailure: (err) => reject(err),
      });
    });
  }

  refreshSession(refreshRequest: RefreshSession): Promise<AuthSession> {
    const refreshToken = new CognitoRefreshToken({
      RefreshToken: refreshRequest.refreshToken,
    });
    const userData: ICognitoUserData = {
      Username: refreshRequest.email,
      Pool: this.provider,
    };
    const cognitoUser = new CognitoUser(userData);

    return new Promise<AuthSession>((resolve, reject) => {
      cognitoUser.refreshSession(refreshToken, (err, session) => {
        if (err) return reject(err);

        const authSession: AuthSession = {
          accessToken: session.accessToken.jwtToken,
          idToken: session.idToken.jwtToken,
          refreshToken: session.refreshToken.token,
        };

        return resolve(authSession);
      });
    });
  }
}
