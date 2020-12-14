import { StatusBar } from 'expo-status-bar';
import React, {Component, useEffect} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import MainView from "./app/screens/MainView";
import TopBar from "./app/components/TopBar";
import PokemonContainer from "./app/components/PokemonContainer";
import BottomBar from "./app/components/BottomBar";
import Loading from "./app/components/Loading";
import { Audio } from "expo-av";
import NetInfo from "@react-native-community/netinfo"


class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemones: [],
      loading: false,
    }
  }

  async componentDidMount() {
    NetInfo.fetch().then(state => {
      if (state.isConnected == true) {
        Alert.alert(
          "Connection Error",
          "Please verify that your device is connected to a network",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK"}
          ],
          { cancelable: false }
        );
      }
    });
    this.setState({loading: true});
    for (let i = 1; i < 10; i++) {
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
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: false,
      playsThroughEarpieceAndroid: true
    })
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./music/PokemonRB.mp3'));
      soundObject.setVolumeAsync(0.5);
      soundObject.setIsLoopingAsync(true);
      await soundObject.playAsync();
    } catch (error) {
      //no debe ocurrir
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <TopBar/>
        <PokemonContainer 
          pokemones={this.state.pokemones} 
        />
        <BottomBar/>
        <Loading isVisible={this.state.loading} text="Loading..."/>
      </View>
    );
  }
}

//uploadPokemons={this.uploadPokemons}

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
