/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginScreen from './src/login/login_screen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginScreen);
