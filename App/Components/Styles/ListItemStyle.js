import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  row: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    marginBottom: 25,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  itemh: {
    textAlign: 'left',
    color: Colors.white,
    fontSize: 26,
    position: 'absolute',
    // right: 20,
    top: 20,
    left: 20,
    zIndex: 999,
    fontWeight: '400',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius : 2,
  },
  itemz: {
    textAlign: 'left',
    color: Colors.white,
    fontSize: 16,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.15)',
    padding: 10,
  },
  img: {
    width: '100%',
    height: 256,
  }
})
