import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  headertext: {
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 50,
    fontSize: 40,
    color: Colors.white,
    zIndex: 999,
  },
  latestedit: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    zIndex: 999,
    marginTop: 0,
  },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  goback:{
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 999,
  },
  gobacktext: {
    fontSize: 22,
    padding: 10,
    zIndex: 999,
    elevation: 5,
    color: 'rgba(255,255,255,0.8)',
  }
})
