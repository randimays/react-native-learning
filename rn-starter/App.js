import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AdjusterScreen from './src/screens/AdjusterScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ColorScreen from './src/screens/ColorScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import CounterScreen from './src/screens/CounterScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    Adjuster: AdjusterScreen,
    Home: HomeScreen,
    Color: ColorScreen,
    Components: ComponentsScreen,
    Counter: CounterScreen,
    Image: ImageScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
