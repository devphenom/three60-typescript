interface SetTokenData {
  result: {
    _id: string;
    email: string;
    password: string;
  };
  token: string;
}

export const setUsers = (data: SetTokenData) => {
  sessionStorage.setItem("user", JSON.stringify(data.result));
  sessionStorage.setItem("tk", data.token);
};
export const getUsers = () => {
  const tk = sessionStorage.getItem("tk");
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  return { tk, user };
};
