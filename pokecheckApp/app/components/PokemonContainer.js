import React from "react";
import { StyleSheet, ScrollView, Text, View, Dimensions, ImageBackground } from "react-native";
import PokemonList from "./PokemonList";

const PokemonContainer = ({ pokemones }) => {
    return (
        <View style={styles.viewContainer}>
            <View style={{height: 515}}>
                <ImageBackground
                    style={styles.backImage}
                    source={require("../../assets/snorlax.jpg")}
                />
                <ScrollView 
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.contentContainer}
                >
                    <PokemonList pokemones={pokemones}/>
                </ScrollView>
            </View>
        </View>
    )
}



/*
Para el ScrollView, detectar cuando llegue al final para recargar nuevos
pokemones

onScroll={(e) => {
    let paddingToBottom = 0.5;
    paddingToBottom += e.nativeEvent.layoutMeasurement.height;
    if(e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
        console.log("final");
    }
}}

async function uploadPokemons(delimitador, pokemones) {
    console.log("Entra al for");
    for (let i = delimitador+1; i < delimitador+10; i++) {
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
      console.log("sale del for");
      //actualizar lista de pokemones
    }
}*/

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: "transparent",
        width: screenWidth
    },
    viewContainer: {
        flex: 1,
    },
    contentContainer: {
        alignItems: "center"
    },
    backImage: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})

export default PokemonContainer;