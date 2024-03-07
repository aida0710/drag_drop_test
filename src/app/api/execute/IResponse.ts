export interface IResponse {
    status: Status;
    message: string;
}

export enum Status {
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    InternalServerError = 500,
    GatewayTimeout = 504,
}
