import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from "./src/pages/PeoplePage";

const AppNavigator = createStackNavigator({
    "Main": {
      screen: PeoplePage
    }
  },{
      defaultNavigationOptions:{
          title: "Pessoas",
          headerStyle: {
            backgroundColor: "#627cf0",
            borderBottomWidth: 1,
            borderBottomColor: "#c5c5c5",
          },
          headerTitleStyle: {
              color: "white",
              fontSize: 30,
              flexGrow: 1,
              textAlign: "center",
          }
      }
  }
  );
   
   
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

