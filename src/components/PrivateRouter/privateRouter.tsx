import { useRouter } from "next/router";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { replace, pathname } = useRouter();
  if (typeof window !== "undefined" && pathname !== "/") {
    const token = localStorage.getItem("userToken");
    if (!token) {
      replace("/");
    }
  }
  return children;
};
export default PrivateRoute;
