import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { CatCard } from './components/CatCard'
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';

export default class App extends Component {

  constructor(props) {
    super(props);

    // Initializing the state 
    this.state = { cats: null };
  }
  componentDidMount() {
    return fetch('https://api.thecatapi.com/v1/images/search?limit=100&order=DESC')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          cats: json
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <SafeAreaProvider>
        <Header
          placement="center"
          centerComponent={{ text: 'Cat List', style: { color: '#fff', fontSize: 24, fontWeight: "bold" } }}
        />

        
          <FlatList
            horizontal={false}
            data={this.state.cats}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <TouchableOpacity activeOpacity={0.9} onPress={() => {
                Linking.openURL(item.url);
              }}>
                <CatCard id={item.id} imageSource={item.url} />
              </TouchableOpacity>
            )}
          />
        
      </SafeAreaProvider>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
