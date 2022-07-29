import { ErrorResponse } from "./types";

export function isErrorResponse(data: unknown | undefined): data is ErrorResponse {
    return data != null && (data as ErrorResponse).error !== undefined;
}
