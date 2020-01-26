import { AppRegistry } from 'react-native'
import Skiper from './src/routes/Routes'
import { name as appName } from './app.json'

import 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => Skiper)
