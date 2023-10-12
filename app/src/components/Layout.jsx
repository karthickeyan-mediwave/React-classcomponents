import { useEffect } from "react";
import CustomNav from "./CustomNav";

const Layout = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);
  return (
    <>
      <CustomNav />
      <div class="container">{props.children}</div>
    </>
  );
};

export default Layout;
