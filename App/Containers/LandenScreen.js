import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  AppState,
} from 'react-native'
import ListItem from './../Components/ListItem'

import TropicalInstituteActions from '../Redux/TropicalInstituteRedux'
import { connect } from 'react-redux'


// Styles
import styles from './Styles/LandenScreenStyle'

class LandenScreen extends Component {
  constructor(props) {
    super(props)

    const { landen } = props

    this.state = {
      fetching: true,
      appState: '',
      data: '',
    }

    // this.getData();
  }

  // getData = async () => {
  //   const api = API.create()
  //   const landen = await api.getLanden()
  //   this.setState({
  //     landen: landen.data,
  //     fetching: false,
  //   })
  // }

  componentDidMount () {
    AppState.addEventListener('change', this._handleAppStateChange)

    const { data } = this.state
  }

  componentWillUnmount () {
    AppState.removeEventListener('change', this._handleAppStateChange)
  }

  _handleAppStateChange = (nextAppState) => {
    const { appState } = this.state
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      this.props.getLanden()
    }
    this.setState({
      appState: nextAppState,
      fetching: false,
    })
  }

  componentWillReceiveProps (newProps) {
    const { landen } = newProps
  }

  oneScreensWorth = 20

  render () {
    const title = "Alle Landen"
    // console.log(this.props.landen)
    console.log(this)
    const { navigate } = this.props.navigation

    if(this.state.fetching === false){
      return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior='position'>

          <Text style={styles.headertext}>{title /*.toUpperCase()*/}</Text>
          <Text style={styles.numberofresults}>ALLE RESULTATEN</Text>

            <Image
              style={styles.back}
              source={require('./../Images/b-top.png')}
            />

            <FlatList
            style={styles.list}
            data={this.props.landen.landen}
            keyExtractor={item => item.id}
            initialNumToRender={this.oneScreensWorth}
            renderItem={({item}) =>
            <TouchableOpacity onPress={() => navigate('LandenDetailScreen', { land: item })} delayPressIn={30}>
              <ListItem item={item} />
            </TouchableOpacity>
            }
          />

          </KeyboardAvoidingView>
        </ScrollView>
      )
    } else {
      return (
        <View style={styles.loading}>
          <KeyboardAvoidingView behavior='position'>
              <Text style={styles.loadingText}>Exploring the world</Text>
              <ActivityIndicator size="small" color="#00BCF2" />
          </KeyboardAvoidingView>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    landen: state.landen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLanden: () => dispatch(TropicalInstituteActions.getLanden()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandenScreen)
