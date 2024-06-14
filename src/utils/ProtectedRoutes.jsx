import { Navigate } from "react-router-dom";
import Layout from "./Layout";

const ProtectedRoutes = () => {

  let isUserAuthenticated = true;

  return (
    !isUserAuthenticated ? (
        <Navigate to='/login' />
    ) : (
        <Layout />
    )
  )
}

export default ProtectedRoutes