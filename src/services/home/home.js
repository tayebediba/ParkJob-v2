import http from "../httpService";

export const getTopFreelancers = async () => {
  const data = await http
    .get("/Home/GetTopFreelancers")
    .then((res) => res)
    .catch((err) => err.response);

  return data;
};

// ------------------------ GET PROTFOLIO LIST -------------------

export const getPortfoliosList = async () => {
  const data = await http
    .get("/Home/GetPortfoliosList")
    .then((res) => res)
    .catch((err) => err.response);
  return data;
};
