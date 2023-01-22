import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { IState } from "../../store/configureStore";
import { ROUTE } from "../util/constant";

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const profile = useSelector((state: IState) => state.authentication.data);

  if (!profile?.token) {
    return <Navigate to={ROUTE.LOGIN} />;
  } else {
    return children as JSX.Element;
  }
};

const withProtection = (WrappedComponent: React.ComponentType) => {
  return (props: JSX.IntrinsicAttributes) => (
    <ProtectedRoute>
      <WrappedComponent {...props} />
    </ProtectedRoute>
  );
};

export default withProtection;
