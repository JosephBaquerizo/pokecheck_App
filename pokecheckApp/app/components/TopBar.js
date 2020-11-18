import React from "react";
import { Image, StyleSheet, View } from "react-native";

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <Image
                style={styles.container}
                source={require('../../assets/logo.png')}
            >
            </Image>
        </View>
    )
};

const styles = StyleSheet.create({
    topBar: {
        height: "15%",
        width: "100%",
        backgroundColor: "#fb503b",
        alignItems: "center"
    },
    container: {
        flex: 1,
        aspectRatio: 2,
        resizeMode: 'contain',
        marginTop: 15
    }
})

export default TopBar;