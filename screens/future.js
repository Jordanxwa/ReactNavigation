import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';

class FutureScreen extends React.Component {
  static navigationOptions = {
    title: 'Future Shows'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Money Heist</Text>

        <Image
          style={styles.imageStyling}
          source={require('../assets/moneyheist.jpg')}
        />

        <Text style={styles.textDesc}>
          I've heard a lot about this show from friends saying how great this
          show is. It focuses on a bank robbery in Spain and is said to be
          pretty intense. I plan to start it soon.
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
            title='Go Home'
            color='red'
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}
export default FutureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    color: '#fff'
  },
  textHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 15,
    marginTop: 15,
    color: '#fff'
  },
  imageStyling: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 200,
    width: 200,
    marginBottom: 10
  },
  textDesc: {
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    color: '#fff',
    marginBottom: 10
  }
});
