
import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

// import App from './Pages/App';
import Profile from './Pages/Profile';

import App from './Pages/App'


const MainNavigator = createStackNavigator({
    Home: {screen: App,  navigationOptions:{headerShown:false}},
    Profile: {screen: Profile},
  });


const R = createAppContainer(MainNavigator);

export default R;