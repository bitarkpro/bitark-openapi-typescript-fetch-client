export abstract class BaseModel {


    /**
     *
     * @param id
     * @param createdAt
     * @param updatedAt
     * @param deletedAt
     */
    constructor(protected id: number, protected createdAt: string, protected updatedAt: string, protected deletedAt: string){

    }
}