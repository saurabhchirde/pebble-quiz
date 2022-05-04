const alertReducer = (alertState, action) => {
  switch (action.type) {
    case "ALERT":
      return {
        ...alertState,
        showAlertBar: true,
        alertText: action.payload.alertText,
        alertType: action.payload.alertType,
        alertIcon: action.payload.alertIcon,
      };

    case "ALERT_CTA":
      return {
        ...alertState,
        showAlertCTABar: true,
        showAlertBar: false,
        alertText: action.payload.alertText,
        alertType: action.payload.alertType,
        alertIcon: action.payload.alertIcon,
      };

    case "HIDE_ALERT":
      return {
        ...alertState,
        showAlertCTABar: false,
        showAlertBar: false,
      };

    default:
      return alertState;
  }
};

export { alertReducer };
