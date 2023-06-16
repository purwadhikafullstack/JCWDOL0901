const { startUserProfileUpdate, startGetUserProfile } = require("../services/profileService");

const updateProfile = async (request, response) => {
  console.log("updateProfile controller: ", request);
  await startUserProfileUpdate(request.body, request.userData.id)
    .then((result) => {
      console.log("updateProfile controller result: ", result);
      response.status(200).send(result);
    })
    .catch((error) => {
      console.log("updateProfile controller error: ", error);
      response.status(error.code).send(error.message);
    });
};

const getProfile = async (request, response) => {
  await startGetUserProfile(request.userData.id)
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((error) => {
      response.status(error.code).send(error.message);
    });
};

module.exports = {
  updateProfile,
  getProfile,
};
