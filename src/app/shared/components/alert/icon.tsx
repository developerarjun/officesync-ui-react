const Icon = (type: string) : string => {
  switch (type) {
    case "success":
      return "toast-success"
    case "warning":
      return "toast-warning";
    case "error":
      return "toast-error";
    default:
      return "toast-info";
  }
};
export default Icon;