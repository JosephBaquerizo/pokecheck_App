import React, { useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Modal from "./Modal";
import { Input, Icon, Button } from "react-native-elements";
import UnderSearch from "./UnderSearch";
import Loading from "./Loading";

const BottomBar = () => {

    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [searchPokemon, setSearchPokemon] = useState("");
    const [pokemon, setPokemon] = useState("");

    const onPress = () => {
        setShowModal(true);
    }

    const onChange = (e) => {
        setSearchPokemon((e.nativeEvent.text).toLowerCase().trim());
    }

    async function pokemonRequest() {
        try {
            setLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`);
            const json = await response.json();
            const info = {
                name: json.name,
                id: json.id,
                image: json.sprites.front_default,
                typeList: json.types[0].type.name,
                height: json.height,
                weight: json.weight
            };
            setPokemon(info);
        } catch(error) {
            setPokemon("error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity 
                onPress={onPress}
                style={styles.touch}
                enabled={false}
            >
                <Image
                    style={styles.pokeball}
                    source={require("../../assets/pokebola.png")}
                />
            </TouchableOpacity>
            <Modal isVisible={showModal} setIsVisible={setShowModal}>
                <Input
                    placeholder="Search pokemon by name or id #"
                    onChange={(e) => onChange(e)}
                    rightIcon={
                        <Icon 
                            type="material-community" 
                            name="magnify"
                            onPress={pokemonRequest}
                        />
                    }
                >
                </Input>
                <UnderSearch pokemon={pokemon}/>
            </Modal>
            <Loading isVisible={loading} text="Loading..."/>
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