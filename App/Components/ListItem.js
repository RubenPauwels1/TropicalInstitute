import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/ListItemStyle'

export default class ListItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const item = this.props.item
    // const { navigate } = this.props.navigation
    // console.log(navigate)

    return (
      <View style={styles.row}>
          <Text style={styles.itemh}>{item.title.rendered}</Text>
          <Image
            style={styles.img}
            source={{uri: item._embedded['wp:featuredmedia'][0].source_url}}
          />
          {/* <Text style={styles.itemz}>{item.land_ziektes.map(i => <Text key={i.ID}>#{i.post_title} </Text>)}</Text> */}
      </View>
    )
  }
}
