// import "./icons";
import { AppRegistry } from 'react-native'
import App from './App'

AppRegistry.registerComponent('web-cra', () => App)
AppRegistry.runApplication('web-cra', {
  rootTag: document.getElementById('root'),
})
