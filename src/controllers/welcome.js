import sendEmail from "../service/sendEmail";
import { welcomeMessage } from "../messages";

async function welcome(req, res) {
  const { to, name } = req.body;

  const message = {
    from: "sender@server.com",
  };

  const data = welcomeMessage(name);

  message.subject = data.subject;
  message.html = data.html;
  message.text = data.text;

  message.to = to;

  try {
    await sendEmail(message);
    return res.status(200).json({ message: "E-mail enviado com sucesso." });
  } catch (err) {
    console.log(err);
  }
}

export default welcome;
