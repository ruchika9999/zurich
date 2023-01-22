import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./component/Pages/Login";
import Home from "./component/Pages/Home/index";
import BadRoute from "./component/Pages/PageNotFound";

import _withLayout from "./component/Layout/Main";

import withProtection from "./component/withRoute/withProtection";
import withPublicRoute from "./component/withRoute/withPublicRoute";
import { ROUTE } from "./component/util/constant";

const withLayout = _withLayout();

const ProtectedHome = withLayout(withProtection(Home));
const PublicLogin = withPublicRoute(Login);

const BaseRoute = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedHome />} path={ROUTE.HOME} />
        <Route element={<PublicLogin />} path={ROUTE.LOGIN} />
        <Route element={<BadRoute />} path={ROUTE.BAD_ROUTE} />
      </Routes>
    </Router>
  );
};

export default BaseRoute;
