import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from "./app/screens/MainView";
import TopBar from "./app/components/TopBar";
import PokemonContainer from "./app/components/PokemonContainer";
import BottomBar from "./app/components/BottomBar";

class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemones: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const json = await response.json();
    this.setState({pokemones: json.name});
    console.log(this.state.pokemones);
  }

  render () {
    return (
      <View style={styles.container}>
        <TopBar/>
        <PokemonContainer/>
        <BottomBar/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
