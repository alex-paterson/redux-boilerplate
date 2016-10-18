import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import {} from '../actions';

var Main = React.createClass({
  getInitialState() {
    return {}
  },
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Boilerplate App
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ccc'
  },
});

var mapStateToProps = (state) => {
  return state
}

module.exports = connect(mapStateToProps)(Main);
