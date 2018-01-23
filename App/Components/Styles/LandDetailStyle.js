import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  topcontainer: {
    marginTop: 50,
  },
  container: {
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
  img: {
    width: '100%',
    height: 256,
  },
  content: {
    padding: 10,
  }
})
