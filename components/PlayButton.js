import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  playButton: {
    opacity: 0.9,
    width: 64,
    height: 64
  },
  playContainer: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const PlayButton = props => (
  <View style={styles.playContainer}>
    <TouchableOpacity
      onPress={() => props.onPress()}
    >
      <Image
        style={styles.playButton}
        source={props.paused?require('./assets/PlayButton.png'):require('./assets/PauseButton.png')}
      />
    </TouchableOpacity>
  </View>
)

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
}

export { PlayButton }
