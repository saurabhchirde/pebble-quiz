export const authReducer = (authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...authState,
        token: action.payload.accessToken,
        email: action.payload.email,
        name: action.payload.displayName,
        profileImg: action.payload.photoURL,
        id: action.payload.uid,
      };
    case "LOGOUT":
      return authState;
  }
};
