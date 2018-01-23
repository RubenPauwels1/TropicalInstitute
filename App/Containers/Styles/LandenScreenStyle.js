import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    // paddingTop: 25,
    // paddingBottom: 25,
  },
  headertext: {
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 50,
    fontSize: 40,
    color: Colors.white,
    zIndex: 999,
  },
  numberofresults: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    zIndex: 999,
    marginTop: 0,
  },
  list: {
    marginTop: 50,
  },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
})
