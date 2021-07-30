import {BaseModel} from "./BaseModel";

export class AuthorityModel extends BaseModel{

    /**
     *
     * @param authorityId
     * @param authorityName
     * @param parentId
     * @param dataAuthorityId
     * @param children
     * @param menus
     * @param defaultRouter
     * @param id
     * @param createdAt
     * @param updatedAt
     * @param deletedAt
     */
    constructor(
        public authorityId: number,
        public authorityName: string,
        public parentId: string,
        public dataAuthorityId: string,
        public children: string,
        public menus: string,
        public defaultRouter: string,
        public id: number,
        public createdAt: string,
        public updatedAt: string,
        public deletedAt: string
    ){
        super(id, createdAt, updatedAt, deletedAt)
    }
}
