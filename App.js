import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  HomeScreen,
  ListsScreen,
  ComponentsScreen,
  ImagesScreen,
} from "./src/screens";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Lists: ListsScreen,
    Components: ComponentsScreen,
    Images: ImagesScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
