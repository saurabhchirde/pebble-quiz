export const authReducer = (authState, action) => {
  switch (action.type) {
    case "LOGIN_SIGNUP":
      return {
        ...authState,
        token: action.payload.token,
        email: action.payload.user.email,
        name: action.payload.user.displayName,
        profileImg: action.payload.user.photoURL,
        id: action.payload.user.uid,
      };

    case "LOGOUT":
      return { token: "", email: "", name: "", profileImg: "", id: "" };
  }
};
