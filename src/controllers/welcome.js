import sendEmail from "../service/sendEmail";
import { welcomeTemplate } from "../templates";

async function welcome(req, res) {
  const { to } = req.body;

  const message = {
    from: "sender@server.com",
  };

  message.subject = welcomeTemplate.subject;
  message.html = welcomeTemplate.html;
  message.text = welcomeTemplate.text;

  message.to = to;

  try {
    sendEmail(message);
    return res.status(200).json({ message: "E-mail enviado com sucesso." });
  } catch (err) {
    console.log(err);
  }
}

export default welcome;
