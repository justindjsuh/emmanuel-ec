'use client';

import { Transporter } from 'nodemailer';

interface ITestButtonProps {
    transporter: Transporter;
}

const TestButton: React.FunctionComponent<ITestButtonProps> = ({ transporter }) => {
    const testEmail = async () => {
        const info = await transporter.sendMail({
          from: 'testSenderAddress@gmail.com',
          to: process.env.GMAIL_USERNAME,
          subject: 'NEWCOMER INFORMATION',
          text: 'Hello this is the text content!'
        });
      };
      
    return <button onClick={testEmail}>CLICK HERE</button>;
};

export default TestButton;