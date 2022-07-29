import { initialFormState } from '@/pages/contact';
import { isErrorResponse } from '@/utils/typeGuards';
import { ErrorResponse, SuccessResponse } from '@/utils/types';
import { useMutation } from '@tanstack/react-query';

type NewEmailSchema = typeof initialFormState;

async function postEmail(body: NewEmailSchema) {
    const response = await fetch('/api/send/email', {
        body: JSON.stringify(body),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await (response.json() as PromiseLike<SuccessResponse<string> | ErrorResponse>);

    if (!response.ok && isErrorResponse(data)) {
        throw new Error(data.error);
    }
    return data;;
}



export const useSendEmail = () => {
    return useMutation<SuccessResponse<string> | ErrorResponse, Error, NewEmailSchema, unknown>(postEmail);
};



