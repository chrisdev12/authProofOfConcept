import CognitoExpress from "cognito-express";
import ITokenValidator from "../interfaces/iTokenValidator";
import { AccessToken } from "../models/authSession";
import dotenv from "dotenv";
dotenv.config();

export default class CognitoJwtValidator implements ITokenValidator {
  private region = process.env.AWSRegion;
  private userPoolId: string = process.env.UserPoolID || "";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private cognitoAuth: any;

  constructor() {
    this.cognitoAuth = new CognitoExpress({
      region: this.region,
      cognitoUserPoolId: this.userPoolId,
      tokenUse: "access",
      tokenExpiration: 3600000,
    });
  }

  async verifyToken(token: AccessToken): Promise<boolean> {
    try {
      const accessTokenFromClient: string = token.accessToken;
      if (!accessTokenFromClient) return false;
      await this.cognitoAuth.validate(accessTokenFromClient);
      return true;
    } catch (_) {
      return false;
    }
  }
}
