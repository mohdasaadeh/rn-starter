import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ListsScreen from "./src/screens/ListsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Lists: ListsScreen,
    Components: ComponentsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
