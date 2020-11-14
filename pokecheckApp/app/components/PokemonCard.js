import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ColorType from "./ColorType";

const PokemonCard = ({ name, image, typeList, id }) => {

    const card_id = `N #${id}`;
    const card_name = capitalize(name);

    return (
        <View style={{
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth: 3,
            borderColor: ColorType[typeList],
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
            width: 150
        }}>
            <View>
                <Image 
                style={styles.picture} 
                source={{uri: `${image}`}}
                />
            </View>
            <Text>
                {card_id}
            </Text>
            <Text style={styles.textName}>
                {card_name}
            </Text>
        </View>
    )

};

const capitalize = (s) => {
  		if (typeof s !== 'string') return ''
  		return s.charAt(0).toUpperCase() + s.slice(1)
	}

const styles = StyleSheet.create({
    picture: {
        width: 100,
        height: 125
    },
    containerPic: {
        backgroundColor: "red"
    },
    textName: {
        fontWeight: "bold",
        marginBottom: 2
    }
});

export default PokemonCard;