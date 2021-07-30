import {UserModel} from "./UserModel";
import {ResponseModel} from "./ResponseModel";

export class AuthModel extends ResponseModel{

	/**
	 *
	 * @param user
	 * @param token
	 * @param expiresAt
	 */
	constructor(public code: number, public msg:string, public msgCode:number,public data: UserModel, public token:string, public expiresAt:number){
		super(code, msg, msgCode)
	}
}
