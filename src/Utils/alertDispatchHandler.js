export const alertDispatchHandler = (
  alertDispatch,
  type,
  alertType,
  alertText
) => {
  switch (alertType) {
    case "SUCCESS":
      return alertDispatch({
        type: type,
        payload: {
          alertText: alertText,
          alertType: "alert-success",
          alertIcon: "fas fa-check-circle alert-icon",
        },
      });

    case "ERROR":
      return alertDispatch({
        type: type,
        payload: {
          alertText: alertText,
          alertType: "alert-error",
          alertIcon: "fas fa-exclamation-circle alert-icon",
        },
      });

    default:
      return alertDispatch({
        type: type,
        payload: {
          alertText: alertText,
          alertType: "alert-info",
          alertIcon: "fas fa-info alert-icon",
        },
      });
  }
};
