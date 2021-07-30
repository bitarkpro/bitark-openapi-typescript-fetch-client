import { AuthDto, AuthDtoFromJSON } from '../dto/AuthDto';
import * as runtime from '../util/runtime';
import json = Mocha.reporters.json;
import {UserDto, UserDtoFromJSON} from "..";

export interface GetAuthLoginRequest {
	username: string,
	password: string,
}

export interface GetAuthRegisterRequest {
	username: string,
	password: string,
}

export interface GetAuthGithubCodeRequest {
	code :string
}

export interface GetTokenRequest {
	token:string
}

export class AuthRoutesApi extends runtime.BaseAPI {
	public async login(username: string, password: string): Promise<AuthDto> {
		const response = await this.loginReq({username:username,password:password});
		return await response.value();
	}
	
	private async loginReq(requestParameters: GetAuthLoginRequest): Promise<runtime.ApiResponse<AuthDto>> {
		const queryParameters: runtime.HTTPQuery = {};
		const headerParameters: runtime.HTTPHeaders = {};
		const response = await this.request({
			path: `/base/login`,
			method: 'POST',
			body:{
				"username":requestParameters.username,
				"password":requestParameters.password,
			},
			headers: headerParameters,
			query: queryParameters,
		});
		return new runtime.JSONApiResponse(response, (jsonValue) => AuthDtoFromJSON(jsonValue));
	}

	public async githubCode(code :string): Promise<AuthDto> {
		const response = await this.githubCodeReq({code:code});
		return await response.value();
	}
	private async githubCodeReq(requestParameters: GetAuthGithubCodeRequest): Promise<runtime.ApiResponse<AuthDto>> {
		const queryParameters: runtime.HTTPQuery = {};
		const headerParameters: runtime.HTTPHeaders = {};
		const response = await this.request({
			path: `/github/code?code=${requestParameters.code}`,
			method: 'GET',
			headers: headerParameters,
			query: queryParameters,
		});
		return new runtime.JSONApiResponse(response, (jsonValue) => AuthDtoFromJSON(jsonValue));
	}

	public async register(username: string, password: string): Promise<AuthDto> {
		const response = await this.registerReq({username:username,password:password});
		return await response.value();
	}

	private async registerReq(requestParameters: GetAuthRegisterRequest): Promise<runtime.ApiResponse<AuthDto>> {
		const queryParameters: runtime.HTTPQuery = {};
		const headerParameters: runtime.HTTPHeaders = {};
		const response = await this.request({
			path: `/base/register`,
			method: 'POST',
			body:{
				"username":requestParameters.username,
				"password":requestParameters.password,
			},
			headers: headerParameters,
			query: queryParameters,
		});
		return new runtime.JSONApiResponse(response, (jsonValue) => AuthDtoFromJSON(jsonValue));
	}


	public async getUserInfo(token:string): Promise<UserDto> {
		const response = await this.getUserInfoReq({token});
		return await response.value();
	}

	private async getUserInfoReq(requestParameters: GetTokenRequest): Promise<runtime.ApiResponse<UserDto>> {
		const queryParameters: runtime.HTTPQuery = {};
		const headerParameters: runtime.HTTPHeaders = {"x-token":requestParameters.token};
		const response = await this.request({
			path: `/user/info`,
			method: 'GET',
			headers: headerParameters,
			query: queryParameters,
		});
		return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue.data));
	}

}