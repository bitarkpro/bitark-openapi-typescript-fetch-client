import { Observable } from "rxjs";
import { AuthModel } from "../../model/AuthModel";

export interface AuthRepository {
	/**
	 *
	 * @param username
	 * @param password
	 * @constructor
	 */
	Login(username: string, password: string): Observable<AuthModel>;

	/**
	 *
	 * @param username
	 * @param password
	 */
	register(username: string, password: string): Observable<AuthModel>;

	/**
	 *
	 * @param code
	 */
	githubCode(code:string): Observable<AuthModel>;
}