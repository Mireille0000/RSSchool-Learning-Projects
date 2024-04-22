export const ws = new WebSocket('ws://127.0.0.1:4000');

export interface UserAuthenticationRequest {
  id: string;
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
} //

export interface UserAuthenticationError {
  id: string;
  type: 'ERROR';
  payload: {
    error: 'a user with this login is already authorized';
  };
} //

// user logout

export interface LogOut {
  id: string;
  type: 'USER_LOGOUT';
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
}

export interface LogOutExternal {
  id: null;
  type: 'USER_EXTERNAL_LOGOUT';
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}

// authenticated users

export interface AuthenticatedUsers {
  id: string;
  type: 'USER_ACTIVE';
  payload: null;
}

export interface AuthenticatedUsersResponse {
  id: string;
  type: 'USER_ACTIVE';
  payload: {
    users: [];
  };
}

// unauthorized users

export interface UnauthorizedUsers {
  id: string;
  type: 'USER_INACTIVE';
  payload: null;
}

export interface UnauthorizedUsersResponse {
  id: string;
  type: 'USER_INACTIVE';
  payload: {
    users: [];
  };
}
