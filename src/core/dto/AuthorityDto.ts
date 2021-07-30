export function AuthorityDtoFromJSON(json: any): AuthorityDto {
    return AuthorityDtoFromJSONTyped(json);
}


export function AuthorityDtoFromJSONTyped(json: any): AuthorityDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorityId': json['authorityId'],
        'authorityName': json['authorityName'],
        'parentId': json['parentId'],
        'dataAuthorityId': json['dataAuthorityId'],
        'children': json['children'],
        'menus': json['menus'],
        'defaultRouter': json['defaultRouter'],
        'id': json['id'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
        'deletedAt': json['deletedAt'],
    };
}

export function AuthorityDtoToJSON(value?: AuthorityDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorityId': value.authorityId,
        'authorityName': value.authorityName,
        'parentId': value.parentId,
        'dataAuthorityId': value.dataAuthorityId,
        'children':  value.children,
        'menus': value.menus,
        'defaultRouter': value.defaultRouter,
        'id':  value.id,
        'createdAt':  value.createdAt,
        'updatedAt': value.updatedAt,
        'deletedAt':  value.deletedAt,
    };

}

export interface AuthorityDto {
     authorityId: number
     authorityName: string
     parentId: string
     dataAuthorityId: string
     children: string
     menus: string
     defaultRouter: string
     id: number
     createdAt: string
     updatedAt: string
     deletedAt: string
}