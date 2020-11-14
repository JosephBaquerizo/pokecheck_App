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