import nodemailer from "nodemailer";
import config from "../config";

const transporter = nodemailer.createTransport(config);

const callback = (error, info) => {
  if (error) {
    console.log(error);
  }
};

const sendEmail = (message) => {
  transporter.sendMail(message, callback);
};

export default sendEmail;
