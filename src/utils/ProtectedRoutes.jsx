import { Navigate } from "react-router-dom";
import Layout from "./Layout";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const ProtectedRoutes = () => {
  const [ user ] = useAuthState(auth);

  return (
    !user ? (
      <Navigate to='/six-pack-mind/login/' />
    ) : (
      <Layout />
    )
  )
}

export default ProtectedRoutes