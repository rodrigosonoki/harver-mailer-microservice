const welcomeMessage = (name) => {
  return {
    subject: "Beeeeem vindo!",
    html: `<p>Bem vindo a ${name}</p>`,
    text: `Bem vindo a ${name}`,
  };
};

export default welcomeMessage;
