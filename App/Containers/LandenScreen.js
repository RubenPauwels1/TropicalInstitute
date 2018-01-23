import React, { Component } from 'react'
import { ScrollView, View, Text, FlatList, KeyboardAvoidingView, Image, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import API from '../Services/Api'
import ListItem from './../Components/ListItem'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LandenScreenStyle'

class LandenScreen extends Component {
  constructor() {
    super()

    this.state = {
      landen: '',
      loading: true,
    }

    this.getData();
  }

  getData = async () => {
    const api = API.create()
    const landen = await api.getLanden()
    this.setState({
      landen: landen.data,
      loading: false,
    })
  }

  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  oneScreensWorth = 20

  render () {
    const title = "Alle Landen"
    const aantallanden = Object.keys(this.state.landen).length
    const { navigate } = this.props.navigation

    if(this.state.loading === false){
      return (
        <ScrollView style={styles.container}>
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
            <TouchableOpacity onPress={() => navigate('LandenDetailScreen', { land: item })}>
              <ListItem item={item} />
            </TouchableOpacity>
            }
          />

          </KeyboardAvoidingView>
        </ScrollView>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <Text>Loading data...</Text>
          </KeyboardAvoidingView>
        </ScrollView>
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
