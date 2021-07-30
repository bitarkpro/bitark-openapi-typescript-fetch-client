import {UserModel} from "./UserModel";
export class AuthModel{

	/**
	 *
	 * @param user
	 * @param token
	 * @param expiresAt
	 */
	constructor(public data: UserModel, public token:string, public expiresAt:number){
	}
}
