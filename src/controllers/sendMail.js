import sendEmail from "../service/sendEmail";

async function sendMail(req, res) {
  try {
    sendEmail();
    return res.status(200).json("E-mail enviado com sucesso.");
  } catch (err) {
    console.log(err);
  }
}

export default sendMail;
