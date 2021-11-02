import http from "../httpService";

export const fetchUserProjectData = async () => {
  const data = await http.get("/Dashboard/FetchUserProjectData").then((res) => {
    return res.data.value.result;
  });
  return data;
};
