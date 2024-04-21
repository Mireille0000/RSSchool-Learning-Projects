export interface UserAuthenticationRequest {
  id?: string;
  type: 'USER_LOGIN';
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}

export interface UserAuthenticationResponse {
  id: string;
  type: 'USER_LOGIN';
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

export interface UserAuthenticationError {
  id: string;
  type: 'ERROR';
  payload: {
    error: 'a user with this login is already authorized';
  };
}
