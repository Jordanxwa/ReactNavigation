import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Some Of My Favorites'
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: '#181818' }}
      >
        <Text style={styles.textHeader}>Stranger Things</Text>

        <Image
          style={styles.imageStyling}
          source={require('../assets/strangerthings3.jpg')}
        />

        <Text style={styles.textDesc}>One of my favorites from this year.</Text>

        <Text style={styles.textHeader}>Breaking Bad</Text>

        <Image
          style={styles.imageStyling}
          source={require('../assets/breakingbad.jpg')}
        />

        <Text style={styles.textDesc}>One Of my all time favorites.</Text>

        <Text style={styles.textHeader}>Game Of Thrones</Text>

        <Image
          style={styles.imageStyling}
          source={require('../assets/gameofthrones.jpg')}
        />

        <Text style={styles.textDesc}>
          One of the greatest starts to a show that I've seen.
        </Text>

        <View
          style={[
            {
              width: '50%',
              margin: 10,
              marginLeft: 90
            }
          ]}
        >
          <Button
            title='View Future Shows'
            color='red'
            onPress={() => this.props.navigation.navigate('Future')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  imageStyling: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 200,
    borderRadius: 3,
    marginBottom: 20,
    marginTop: 10
  },
  textHeader: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  textDesc: {
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    color: '#fff',
    fontSize: 16,
    marginBottom: 10
  }
});
