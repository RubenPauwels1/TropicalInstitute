import React, { Component } from 'react'
import { ScrollView, View, Text, FlatList, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import API from '../Services/Api'

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

  render () {
    if(this.state.loading === false){
      return (
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <Text>LandenScreen</Text>
            <FlatList
            data={this.state.landen}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
            <View>
              <Text style={styles.item}>{item.id} {item.title.rendered}</Text>
            </View>}
          />
          {console.log(this.state.landen)}
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
