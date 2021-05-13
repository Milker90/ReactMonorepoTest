import './initIntl';
import {AppRegistry} from 'react-native';
import App from '@universal/common/src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
