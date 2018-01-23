import React, { Component } from 'react'
import { ScrollView, View, Text, FlatList, KeyboardAvoidingView, Image, Button } from 'react-native'
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
    const title = "landen"
    const { navigate } = this.props.navigation
    console.log(navigate)

    if(this.state.loading === false){
      return (
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>

          <Text style={styles.headertext}>{title.toUpperCase()}</Text>

            <Image
              style={styles.back}
              source={require('./../Images/b-top.png')}
            />

            {/*<Button
              onPress={() => navigate('LaunchScreen')}
              title="to Launch!"
            />*/}

            <FlatList
            style={styles.list}
            data={this.state.landen}
            keyExtractor={item => item.id}
            initialNumToRender={this.oneScreensWorth}
            renderItem={({item}) =>
              <ListItem item={item} />
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
