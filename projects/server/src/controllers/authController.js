const {
  startUserRegistration,
  startFindAdmins,
  startAdminRegistration,
  startVerification,
  startLoginAuthentication,
  startUserLoginAuthentication,
  startUserProfileUpdate,
  startGetUserProfile,
} = require("../services/authService");

const registerUser = async (request, response) => {
  await startUserRegistration(request.body)
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((error) => {
      response.status(error.code).send(error.message);
    });
};

const getAdmins = async (request, response) => {
  const { filter, order, page } = request.query;

  await startFindAdmins(filter, order, page)
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((error) => {
      response.status(error.code).send(error.message);
    });
};

const registerAdmin = async (request, response) => {
  await startAdminRegistration(request.body)
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((error) => {
      response.status(error.code).send(error.message);
    });
};

const loginAdmin = async (request, response) => {
  await startLoginAuthentication(request.body, "Admins")
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((error) => {
      response.status(error.code).send(error.message);
    });
};

const loginUser = async (request, response) => {
  await startUserLoginAuthentication(request.body, "Users")
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((error) => {
      response.status(error.code).send(error.message);
    });
};

const updateProfile = async (request, response) => {
  await startUserProfileUpdate(request.body, "Profiles")
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((error) => {
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

const verifyUser = async (request, response) => {
  await startVerification(request.params.token)
    .then((result) => {
      response.status(200).send(result);
    })
    .catch((error) => {
      response.status(error.code).send(error.message);
    });
};

module.exports = {
  registerUser,
  getAdmins,
  registerAdmin,
  verifyUser,
  loginAdmin,
  loginUser,
  updateProfile,
  getProfile,
};
