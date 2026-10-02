const loginUser = (email, password) => {
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
// Promises e codigo assincrono com async await
const getUser = async () => {
  try {
    const user = await loginUser("email@teste.com", "senha123");

    console.log("Usuário logado!");
    console.log("Dados do usuário: ", user);

    const videos = await getUserVideos();
    console.log("Videos recuperados: ", videos);

    const videosDetails = await getUserVideoDetails();
    console.log("Detalhe dos videos: ", videosDetails);
  } catch (errorMessage) {
    console.log(errorMessage);
  }
};
getUser();
