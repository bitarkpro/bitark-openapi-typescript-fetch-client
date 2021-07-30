import { AuthorityModel } from "./AuthorityModel";
import { BaseModel } from "./BaseModel";

export class UserModel extends BaseModel{
    /**
     *
     * @param uuid
     * @param userName
     * @param bit
     * @param phone
     * @param email
     * @param nickName
     * @param headerImg
     * @param authority
     * @param authorityId
     * @param sideMode
     * @param activeColor
     * @param baseColor
     * @param openId
     * @param githubId
     * @param integral
     * @param totalstor
     * @param maxTotalstor
     * @param id
     * @param createdAt
     * @param updatedAt
     * @param deletedAt
     */
    constructor(
        public uuid: string,
        public userName: string,
        public bit: string,
        public phone: string,
        public email: string,
        public nickName: string,
        public headerImg: string,
        public authority:AuthorityModel,
        public authorityId: string,
        public sideMode: string,
        public activeColor: string,
        public baseColor: string,
        public openId: string,
        public githubId: string,
        public integral: string,
        public totalstor: number,
        public maxTotalstor: number,
        public id: number,
        public createdAt: string,
        public updatedAt: string,
        public deletedAt: string
    ){
        super(id, createdAt, updatedAt, deletedAt)
    }
}