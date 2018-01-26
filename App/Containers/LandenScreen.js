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
 } from 'react-native'
import { connect } from 'react-redux'
import API from '../Services/Api'
import ListItem from './../Components/ListItem'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { tropicalInstituteRequest } from '../Redux/TropicalInstituteRedux'

// Styles
import styles from './Styles/LandenScreenStyle'

class LandenScreen extends Component {
  constructor() {
    super()

    this.state = {
      landen: '',
      fetching: true,
    }

    this.getData();
  }

  getData = async () => {
    const api = API.create()
    const landen = await api.getLanden()
    this.setState({
      landen: landen.data,
      fetching: false,
    })
  }

  //TODO: IMPLEMENT RIGHT
  componentWillReceiveProps (newProps) {
    console.log(newProps)
    if (newProps.landen) {
      this.setState(prevState => ({
        landen: prevState.dataSource.cloneWithRows(newProps.landen)
      }))
    }
  }
  //END TODO

  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  oneScreensWorth = 20

  render () {
    const title = "Alle Landen"
    console.log(this.state.landen)
    const aantallanden = this.state.landen.length
    const { navigate } = this.props.navigation

    if(this.state.fetching === false){
      return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior='position'>

          <Text style={styles.headertext}>{title /*.toUpperCase()*/}</Text>
          <Text style={styles.numberofresults}>{aantallanden} RESULTATEN</Text>

            <Image
              style={styles.back}
              source={require('./../Images/b-top.png')}
            />

            <FlatList
            style={styles.list}
            data={this.state.landen}
            keyExtractor={item => item.id}
            initialNumToRender={this.oneScreensWorth}
            renderItem={({item}) =>
            <TouchableOpacity onPress={() => navigate('LandenDetailScreen', { land: item })} delayPressIn={50}>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandenScreen)
