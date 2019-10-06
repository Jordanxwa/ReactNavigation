import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Shows'
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.tvIcon} source={require('../assets/tvicon.png')} />

        <Text style={styles.homeText}>
          Among all of the shows out there these are the few that I've enjoyed
          lately.
        </Text>

        <View
          style={[
            {
              width: '40%',
              margin: 10,
              marginLeft: 110
            }
          ]}
        >
          <Button
            title='View My Shows'
            color='red'
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    color: '#fff'
  },
  tvIcon: {
    marginTop: 40,
    marginBottom: 20,
    width: 200,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  homeText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20
  }
});
