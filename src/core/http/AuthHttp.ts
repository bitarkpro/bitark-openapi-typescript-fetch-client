import { Observable } from "rxjs";
import { AuthModel } from "../../model/AuthModel";
import { AuthorityModel } from "../../model/AuthorityModel";
import { UserModel } from "../../model/UserModel";
import { AuthRepository } from "../api/AuthRepository";
import { AuthRoutesApi } from "../api/AuthRoutesApi";
import { AuthDto } from "../dto/AuthDto";
import { Http } from "./Http";

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
    
    public static toAuthModel(dto: AuthDto): AuthModel {
        return new AuthModel(dto.code,dto.msg,dto.msgCode,new UserModel(
             dto.data.user.uuid,
             dto.data.user.userName,
             dto.data.user.bit,
             dto.data.user.phone,
             dto.data.user.email,
             dto.data.user.nickName,
             dto.data.user.headerImg,
             new AuthorityModel(
                dto.data.user.authority.authorityId,
                dto.data.user.authority.authorityName,
                dto.data.user.authority. parentId,
                dto.data.user.authority. dataAuthorityId,
                dto.data.user.authority. children,
                dto.data.user.authority. menus,
                dto.data.user.authority. defaultRouter,
                dto.data.user.authority. id,
                dto.data.user.authority. createdAt,
                dto.data.user.authority. updatedAt,
                dto.data.user.authority. deletedAt,
             ),
             dto.data.user.authorityId,
             dto.data.user.sideMode,
             dto.data.user.activeColor,
             dto.data.user.baseColor,
             dto.data.user.openId,
             dto.data.user.githubId,
             dto.data.user.integral,
             dto.data.user.totalstor,
             dto.data.user.maxTotalstor,
             dto.data.user.id,
             dto.data.user.createdAt,
             dto.data.user.updatedAt,
             dto.data.user.deletedAt,
        ), dto.data.token, dto.data.expiresAt)
    }
}