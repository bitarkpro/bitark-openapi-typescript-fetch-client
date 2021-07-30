import { UserDto, UserDtoFromJSONTyped, UserDtoToJSON } from "./UserDto";

export function AuthDtoFromJSON(json: any): AuthDto {
    return AuthDtoFromJSONTyped(json);
}

export function AuthDtoFromJSONTyped(json: any): AuthDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': json['code'],
        'msg': json['msg'],
        'data': {
            'user': UserDtoFromJSONTyped(json.data["user"]),
            'token': json.data['token'],
            'expiresAt': json.data['expiresAt'],
        },
        'msgCode': json['msgCode']
    };
}

export function AuthDtoToJSON(value?: AuthDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code':value.code,
        'data':value.data,
        'msg': value.msg,
        'msgCode': value.msgCode
    };

}

export interface AuthDto {
    code:number
    data:{
        user: UserDto
        token:string
        expiresAt:number
    }
    msg:string
    msgCode:number
}