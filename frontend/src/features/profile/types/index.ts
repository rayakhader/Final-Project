export interface TokenPayload {
    user_id: string;
    given_name: string;
    family_name: string;
    userType: string;
    exp: number;
    nbf: number;
    iss: string;
}