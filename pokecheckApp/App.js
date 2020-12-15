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
      loading: false,
    }
  }

  async componentDidMount() {
    NetInfo.fetch().then(state => {
      if (state.isConnected == false) {
        Alert.alert(
          "Connection Error",
          "Please verify that your device is connected to a network",
          [
            { text: "OK"}
          ],
          { cancelable: false }
        );
      }
    });
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
        <PokemonContainer />
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
