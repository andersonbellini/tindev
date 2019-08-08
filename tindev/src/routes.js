import { createAppContainter, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import Main from "./pages/Main";

export default createAppContainter(
  createSwitchNavigator({
    Login,
    Main
  })
);
