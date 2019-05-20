import axios from "axios";

export const register = newUser => {
  return axios
    .post("users/register", {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      type: newUser.type
    })
    .then(res => {
      console.log("Registered");
    });
};

export const login = user => {
  return axios
    .post("users/login", {
      id: user.id,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("usertoken", user.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
