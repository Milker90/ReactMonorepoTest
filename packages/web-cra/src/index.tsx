// import "./icons";
import { AppRegistry } from 'react-native'
import App from '@universal/common/src/App'

AppRegistry.registerComponent('web-cra', () => App)
AppRegistry.runApplication('web-cra', {
  rootTag: document.getElementById('root'),
})
