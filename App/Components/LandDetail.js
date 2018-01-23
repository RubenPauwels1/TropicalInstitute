import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/LandDetailStyle'

export default class LandDetail extends Component {
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
    const land = this.props.land

    return (
      <View>
        <View style={[styles.container, styles.topcontainer]}>
          <Image
            style={styles.img}
            source={{uri: land._embedded['wp:featuredmedia'][0].source_url}}
          />
          <Text style={styles.content}>{land.content.rendered}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.content}>
            <Text style={styles.itemz}>{land.land_ziektes.map(i => <Text key={i.ID}>{i.post_title} </Text>)}</Text>
          </Text>
        </View>
      </View>
    )
  }
}
