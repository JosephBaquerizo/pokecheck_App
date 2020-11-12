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
    //for (let i = 1; i < 152; i++) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const json = await response.json();
    const info = {
      name: json.name,
      id: json.id,
      image: json.sprites.front_default,
      typeList: json.types[0].type.name,
      height: json.height,
      weight: json.weight
    }
    //}
    this.setState({loading: false});
    this.setState({pokemones: info});
    console.log(this.state.pokemones);
    //console.log(this.state.loading);
  }

  render () {
    return (
      <View style={styles.container}>
        <TopBar/>
        <PokemonContainer/>
        <BottomBar/>
        <Loading isVisible={this.state.loading} text="Cargando..."/>
      </View>
    );
  }
}

//<Loading isVisible={this.loading} text="Cargando..."/>

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
