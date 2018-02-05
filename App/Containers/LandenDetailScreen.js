import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button, Image, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import LandDetail from './../Components/LandDetail'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LandenDetailScreenStyle'

class LandenDetailScreen extends Component {

    render () {

    // console.log(this.props.navigation)
    const land = this.props.navigation.state.params.land

    const mod_date = new Date(land.modified_gmt)

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <TouchableOpacity style={styles.goback} onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.gobacktext}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headertext}>{land.title.rendered}</Text>
          <Text style={styles.latestedit}>LAATSTE AANPASSING {mod_date.toLocaleDateString()}</Text>

          <Image
            style={styles.back}
            source={require('./../Images/b-top.png')}
          />

          <LandDetail land={land} />

        </KeyboardAvoidingView>
      </ScrollView>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(LandenDetailScreen)
