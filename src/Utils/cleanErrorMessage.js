export const cleanErrorMessage = (error) => {
  return error
    .replace("Firebase: Error", "")
    .replace("(auth/", "")
    .replace(")", "")
    .replace("-", " ");
};
