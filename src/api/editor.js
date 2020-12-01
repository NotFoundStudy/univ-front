import { Auth } from "./Auth";

const createNotice = async ({ token, data }) => {
  const authAPI = Auth.create(token);
  console.log("@@ authAPI .post가 절로 있는지?", authAPI);
  return await authAPI.post("/create-board", data);
};

export const Api = {
  createNotice,
};
