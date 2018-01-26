import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/LandDetailStyle'
import striptags from 'striptags'

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
          <Text style={styles.content}>{striptags(land.content.rendered)}</Text>
        </View>

              {land.land_ziektes.map(i =>
                <View style={styles.container} key={i.ID}>
                    <View style={styles.itemz}>
                        <Text style={[styles.content, styles.ziektetitle]}>{i.post_title}</Text>
                        <Text style={styles.content}>{striptags(i.post_content)}</Text>
                    </View>
                </View>
              )}

      </View>
    )
  }
}
