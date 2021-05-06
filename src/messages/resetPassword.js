const resetPassword = (data) => {
  return {
    subject: "Beeeeem vindo!",
    html: `<p>Bem vindo a ${data}</p>`,
    text: `Bem vindo a ${data}`,
  };
};

export default resetPassword;
