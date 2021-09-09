import { Fragment } from "react/cjs/react.production.min";
import Main from "./Main";
import MainNav from "./MainNav";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav></MainNav>
      <Main>{props.children}</Main>
    </Fragment>
  );
};
export default Layout;
