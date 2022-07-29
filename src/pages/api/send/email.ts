import { NextApiRequest, NextApiResponse } from 'next';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { getError } from '@/utils/getError';

const sesClient = new SESClient({
    region: process.env.REGION_AWS,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_AWS,
        secretAccessKey: process.env.SECRET_KEY_AWS,
    }
});

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, subject, message } = req.body;
    try {
        const params = {
            Destination: {
                ToAddresses: [
                    "webadmin@heuris.com.au",
                ],
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: `<p>Name: ${name}</p><p>Email: ${email}</p> <p>Message:</p><p>${message}</p>`,
                    },
                    Text: {
                        Charset: "UTF-8",
                        Data: `${name}: <${email}> has sent you a message:\n ${message}`,
                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: `${subject}`,
                },
            },
            Source: 'web@ses.heuris.com.au',
            ReplyToAddresses: [
                `${email}`
            ],
        };
        const data = await sesClient.send(new SendEmailCommand(params));
        console.log("Success", data);
        res.json({ success: true, data: "Email sent" });
    } catch (error) {
        res.status(400).json({ success: false, error: getError(error) });
    }
}

export default sendEmail;
