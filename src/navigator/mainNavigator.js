import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen010494Navigator from '../features/BlankScreen010494/navigator';
import BlankScreen110493Navigator from '../features/BlankScreen110493/navigator';
import BlankScreen110492Navigator from '../features/BlankScreen110492/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen010494: { screen: BlankScreen010494Navigator },
BlankScreen110493: { screen: BlankScreen110493Navigator },
BlankScreen110492: { screen: BlankScreen110492Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
