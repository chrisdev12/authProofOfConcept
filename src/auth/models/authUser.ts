export type UserRequest = {
  email: string;
  password: string;
};

export type UserLogged = {
  accessToken: string;
  refreshToken: string;
};

export type RefreshSession = {
  email: string;
  refreshToken: string;
};
