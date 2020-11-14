import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from "./app/screens/MainView";
import TopBar from "./app/components/TopBar";
import PokemonContainer from "./app/components/PokemonContainer";
import BottomBar from "./app/components/BottomBar";
import Loading from "./app/components/Loading";

class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemones: [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({loading: true});
    for (let i = 1; i < 20; i++) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      let json = await response.json();
      let info = {
        name: json.name,
        id: json.id,
        image: json.sprites.front_default,
        typeList: json.types[0].type.name,
        height: json.height,
        weight: json.weight
      };
      this.setState({pokemones: this.state.pokemones.concat(info)});
    }
    this.setState({loading: false});
    console.log(this.state.pokemones);
  }

  render () {
    return (
      <View style={styles.container}>
        <TopBar/>
        <PokemonContainer pokemones={this.state.pokemones}/>
        <BottomBar/>
        <Loading isVisible={this.state.loading} text="Cargando..."/>
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
