const loginUser = (email, password) => {
  // Retornar uma promise - essa função vai retornar algo que vai levar um tempo para ser executada, ou seja, prometendo que em algum momento ou vai retonar o sucesso ou vai retornar algum erro
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        return reject("Erro de conexão com o banco.");
      }
      resolve({ email, password });
    }, 3000);
  });
};

const getUserVideos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video_1", "video_2", "video_3"]);
    }, 2000);
  });
};

const getUserVideoDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Node.js Promise", duration: 1 });
    }, 2000);
  });
};

// resumo - Faça o login do usuário, then logue o usuário e retorne outra promise, then execute de acordo com a outra promise (resolve ou reject)
const user = loginUser("teste@teste.com", "senha123")
  .then((user) => {
    console.log("Usuário logado com sucesso!");
    console.log("Dados do usuário:", user);

    return getUserVideos();
  })
  .then((videos) => {
    console.log("Videos recuperados: ", videos);
    return getUserVideoDetails();
  })
  .then((details) => {
    console.log(
      `ID: ${details.id}, Nome do vídeo: ${details.name}, Duração do vídeo(horas): ${details.duration}`,
    );
  })
  //   captura o erro de qualquer promise
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
