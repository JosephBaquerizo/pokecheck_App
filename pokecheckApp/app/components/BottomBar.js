import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
//import { Icon } from "react-native-elements";

const BottomBar = () => {
    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity 
                onPress={() => console.log("pokeball")}
                style={styles.touch}
                enabled={false}
            >
                <Image
                    style={styles.pokeball}
                    source={require("../../assets/pokebola.png")}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: "#fb503b",
        height: "10%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    pokeball: {
        flex: 1,
        width: 80,
        height:80,
        resizeMode: "contain",
        marginBottom: 10,
    },
    touch: {
        position: "absolute"
    }
})

export default BottomBar;