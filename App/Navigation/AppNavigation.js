import { StackNavigator } from 'react-navigation'
import LandenDetailScreen from '../Containers/LandenDetailScreen'
import LandenScreen from '../Containers/LandenScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LandenDetailScreen: { screen: LandenDetailScreen },
  LandenScreen: { screen: LandenScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LandenScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
