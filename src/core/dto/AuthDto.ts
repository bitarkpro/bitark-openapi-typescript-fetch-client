import { UserDto, UserDtoFromJSONTyped } from "./UserDto";

export function AuthDtoFromJSON(json: any): AuthDto {
    return AuthDtoFromJSONTyped(json);
}

export function AuthDtoFromJSONTyped(json: any): AuthDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'user': UserDtoFromJSONTyped(json.data["user"]),
        'token': json.data['token'],
        'expiresAt': json.data['expiresAt'],
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
        'user':value.user,
        'token':value.token,
        'expiresAt': value.expiresAt,
    };

}

export interface AuthDto {
    user: UserDto
    token:string
    expiresAt:number
}