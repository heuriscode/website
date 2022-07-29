export function getError(error: Error | string | unknown, selector?: string): string {
    try {
        if (error instanceof Error) {
            return error.message;
        }
        if (typeof error === 'string') {
            return error;
        }
        if (typeof error[selector] === 'string') {
            return error[selector];
        }
    } catch {
        return 'Something when wrong.';
    }
    return 'Something when wrong.';
}
