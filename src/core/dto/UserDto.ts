import { AuthorityDto, AuthorityDtoFromJSONTyped, AuthorityDtoToJSON } from "./AuthorityDto";

export function UserDtoFromJSON(json: any): UserDto {
    return UserDtoFromJSONTyped(json);
}

export function UserDtoFromJSONTyped(json: any): UserDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'uuid': json['uuid'],
        'userName': json['userName'],
        'bit': json['bit'],
        'phone': json['phone'],
        'email': json['email'],
        'nickName': json['nickName'],
        'headerImg': json['headerImg'],
        'authorityId': json['authorityId'],
        'sideMode': json['sideMode'],
        'activeColor': json['activeColor'],
        'baseColor': json['baseColor'],
        'openId': json['openId'],
        'githubId': json['githubId'],
        'integral': json['integral'],
        'totalstor': json['totalstor'],
        'maxTotalstor': json['maxTotalstor'],
        'id': json['id'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
        'deletedAt': json['deletedAt'],
        'authority': AuthorityDtoFromJSONTyped(json),
    };
}

export function UserDtoToJSON(value?: UserDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'uuid': value.uuid,
        'userName': value.userName,
        'bit': value.bit,
        'phone': value.phone,
        'email': value.email,
        'nickName': value.nickName,
        'authorityId': value.authorityId,
        'sideMode': value.sideMode,
        'activeColor': value.activeColor,
        'baseColor': value.baseColor,
        'openId': value.openId,
        'githubId': value.githubId,
        'integral': value.integral,
        'totalstor': value.totalstor,
        'maxTotalstor': value.maxTotalstor,
        'id': value.id,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'deletedAt': value.deletedAt,
        'authority': AuthorityDtoToJSON(value.authority)
    };

}

export interface UserDto {
     uuid: string
     userName: string
     bit: string
     phone: string
     email: string
     nickName: string
     headerImg: string
     authority:AuthorityDto
     authorityId: string
     sideMode: string
     activeColor: string
     baseColor: string
     openId: string
     githubId: string
     integral: string
     totalstor: number
     maxTotalstor: number
     id: number
     createdAt: string
     updatedAt: string
     deletedAt: string
}