export const config = () => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : window.location.origin;
  return { baseURL };
};
