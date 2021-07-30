import { Observable } from "rxjs";
import { AuthModel } from "../../model/AuthModel";
import { AuthorityModel } from "../../model/AuthorityModel";
import { UserModel } from "../../model/UserModel";
import { AuthRepository } from "../api/AuthRepository";
import { AuthRoutesApi } from "../api/AuthRoutesApi";
import { AuthDto } from "../dto/AuthDto";
import { Http } from "./Http";
import {UserDto} from "..";

export class AuthHttp extends Http implements AuthRepository {
    /**
     * @internal
     * auth routes api
     */
    private authRoutesApi: AuthRoutesApi;

    /**
     * @description Constructor
     * @param url Base url
     * @param fetchApi fetch function to be used when performing rest requests.
     */
    constructor(url: string, fetchApi?: any) {
        super(url, fetchApi);
        this.authRoutesApi = new AuthRoutesApi(this.config());
    }

    Login(username: string, password: string): Observable<AuthModel> {
        return this.call(this.authRoutesApi.login(username, password), AuthHttp.toAuthModel);
    }

    githubCode(code: string): Observable<AuthModel> {
        return this.call(this.authRoutesApi.githubCode(code), AuthHttp.toAuthModel);
    }

    register(username: string, password: string): Observable<AuthModel> {
        return this.call(this.authRoutesApi.register(username, password), AuthHttp.toAuthModel);
    }

    getUserInfo(token:string): Observable<UserModel> {
        return this.call(this.authRoutesApi.getUserInfo(token), AuthHttp.toUserModel);
    }
    
    public static toAuthModel(dto: AuthDto): AuthModel {
        return new AuthModel(new UserModel(
             dto.user.uuid,
             dto.user.userName,
             dto.user.bit,
             dto.user.phone,
             dto.user.email,
             dto.user.nickName,
             dto.user.headerImg,
             new AuthorityModel(
                dto.user.authority.authorityId,
                dto.user.authority.authorityName,
                dto.user.authority. parentId,
                dto.user.authority. dataAuthorityId,
                dto.user.authority. children,
                dto.user.authority. menus,
                dto.user.authority. defaultRouter,
                dto.user.authority. id,
                dto.user.authority. createdAt,
                dto.user.authority. updatedAt,
                dto.user.authority. deletedAt,
             ),
             dto.user.authorityId,
             dto.user.sideMode,
             dto.user.activeColor,
             dto.user.baseColor,
             dto.user.openId,
             dto.user.githubId,
             dto.user.integral,
             dto.user.totalstor,
             dto.user.maxTotalstor,
             dto.user.id,
             dto.user.createdAt,
             dto.user.updatedAt,
             dto.user.deletedAt,
        ), dto.token, dto.expiresAt)
    }

    public static toUserModel(dto: UserDto): UserModel {
        return new UserModel(
            dto.uuid,
            dto.userName,
            dto.bit,
            dto.phone,
            dto.email,
            dto.nickName,
            dto.headerImg,
            new AuthorityModel(
                dto.authority.authorityId,
                dto.authority.authorityName,
                dto.authority. parentId,
                dto.authority. dataAuthorityId,
                dto.authority. children,
                dto.authority. menus,
                dto.authority. defaultRouter,
                dto.authority. id,
                dto.authority. createdAt,
                dto.authority. updatedAt,
                dto.authority. deletedAt,
            ),
            dto.authorityId,
            dto.sideMode,
            dto.activeColor,
            dto.baseColor,
            dto.openId,
            dto.githubId,
            dto.integral,
            dto.totalstor,
            dto.maxTotalstor,
            dto.id,
            dto.createdAt,
            dto.updatedAt,
            dto.deletedAt,
        )
    }
}