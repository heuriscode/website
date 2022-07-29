
export interface ErrorResponse {
    success: false;
    error: string;
}

export interface SuccessResponse<Data> {
    success: true;
    data: Data;
}
