import * as nodemailer from 'nodemailer';

export async function sendEmail(email: string, code: number): Promise<void> {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'direccion.lossupershy@gmail.com',
            pass: process.env.EMAIL_FROM_PASSWORD
        }
      });
  
      const mailOptions = {
        from: 'direccion.lossupershy@gmail.com',
        to: email,
        subject: 'Restablecimiento de contraseña',
        text: 'Para restablecer tu contraseña utiliza el siguiente código: ' + code.toString(), 
      };
  
      await transporter.sendMail(mailOptions);
}


