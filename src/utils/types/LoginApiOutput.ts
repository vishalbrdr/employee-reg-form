export type LoginApiOutput = {
  AuthenticationResult: {
    AccessToken: string;
    ExpiresIn: number;
    IdToken: string;
    RefreshToken: string;
    TokenType: string;
  };
  user: {
    username: string;
    email: string;
    picture: string;
    name: string;
    __typeName: "User";
    email_verified: string;
  };
};
