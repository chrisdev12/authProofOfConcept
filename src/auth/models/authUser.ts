export type UserRequest = {
  email: string;
  password: string;
};

export type UserLogged = {
  accessToken: string;
  refreshToken: string;
};
