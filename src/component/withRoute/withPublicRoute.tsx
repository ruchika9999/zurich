import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { IState } from "../../store/configureStore";
import { ROUTE } from "../util/constant";

const Route = ({ children }: React.PropsWithChildren) => {
  const profile = useSelector((state: IState) => state.authentication.data);

  if (profile?.token) {
    return <Navigate to={ROUTE.HOME} />;
  } else {
    return children as JSX.Element;
  }
};

const withPublicRoute = (WrappedComponent: React.ComponentType) => {
  return (props: JSX.IntrinsicAttributes) => (
    <Route>
      <WrappedComponent {...props} />
    </Route>
  );
};

export default withPublicRoute;
