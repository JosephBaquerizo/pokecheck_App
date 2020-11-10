import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

const PokemonContainer = () => {
    return (
        <View style={styles.viewContainer}>
            <View style={{height: 515}}>
                <ScrollView style={styles.scrollContainer}>
                    <Text>Scroll View</Text>
                    <Text>Scroll View</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: "blue",
    },
    viewContainer: {
        flex: 1
    }
})

export default PokemonContainer;