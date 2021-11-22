import { CognitoUserPool, ICognitoUserPoolData }  from 'amazon-cognito-identity-js';
import IAuthService from './iAuthService';
import { UserRequest}  from '../models/authUser';
require('dotenv').config()

export default class CognitoService implements IAuthService {
    private provider: CognitoUserPool;
    private region: string = 'us-east-1';
    private userPoolId : string = process.env.UserPoolID || "";
    private ClientId : string = process.env.ClientId || "";

    constructor(){
        const poolData: ICognitoUserPoolData = {
            UserPoolId : this.userPoolId,
            ClientId : this.ClientId,
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

    async signIn(user: UserRequest) : Promise<string> {
        return "s";
    }
}
