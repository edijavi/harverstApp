export interface JwtResponse {
    user: {
      subid: string;
      name: string;
      surname: string;
      email: string;
      role: string;
      image: string;
  },
  access_token: string,
  expires_in: string
}
