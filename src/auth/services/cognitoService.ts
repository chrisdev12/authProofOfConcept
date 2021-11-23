import { CognitoUserPool, ICognitoUserPoolData, AuthenticationDetails, CognitoUser, ICognitoUserData }  from 'amazon-cognito-identity-js';
import IAuthService from './iAuthService';
import { UserRequest}  from '../models/authUser';
require('dotenv').config()

export default class CognitoService implements IAuthService {
    private provider: CognitoUserPool;
    private region: string = 'us-east-1';
    private userPoolId : string = process.env.UserPoolID || "";
    private clientId : string = process.env.ClientId || "";

    constructor(){
        const poolData: ICognitoUserPoolData = {
            UserPoolId : this.userPoolId,
            ClientId : this.clientId,
        }
        this.provider = new CognitoUserPool(poolData)
    }

    signUp(newUser: UserRequest) : Promise<string> {
        return new Promise<any>((resolve, reject) => {
            this.provider.signUp(newUser.email, newUser.password, [], [], (err, result: any) => 
            {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                let cognitoUser = result.user;
                console.log(result);
                console.log(cognitoUser);
                console.log('user name is ' + cognitoUser.getUsername());
    
                return resolve(cognitoUser);
            })
        }); 
    };

    signIn(user: UserRequest) : Promise<string> {
        const authDetails = new AuthenticationDetails({
            Username: user.email,
            Password: user.password
        });
        const userData: ICognitoUserData = {
            Username: user.email,
            Pool: this.provider
        };
        const cognitoUser = new CognitoUser(userData);

        return new Promise<string>((resolve, reject) => {
            cognitoUser.authenticateUser(authDetails, {
                onSuccess: function (result) {
                    console.log('access token + ' + result.getAccessToken().getJwtToken());
                    console.log('id token + ' + result.getIdToken().getJwtToken());
                    console.log('refresh token + ' + result.getRefreshToken().getToken());
                    return resolve(result.getAccessToken().getJwtToken());
                },
                onFailure: function(err) {
                    console.log(err);
                    reject(err);
                },
            });
        })
    }
}
