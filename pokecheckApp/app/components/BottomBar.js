import React, { useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import Modal from "./Modal";
import { Input, Icon, Button } from "react-native-elements";
import UnderSearch from "./UnderSearch";
import Loading from "./Loading";
import NetInfo from "@react-native-community/netinfo"

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
        try {
            setLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`);
            const json = await response.json();
            let tipos = "";
            for (let i=0; i < json.types.length; i++) {
                if (i != json.types.length - 1) {
                    tipos = tipos.concat(json.types[i].type.name, "/");
                } else {
                    tipos = tipos.concat(json.types[i].type.name);
                }
            }
            const info = {
                name: json.name,
                id: json.id,
                image: json.sprites.front_default,
                typeList: tipos,
                height: json.height,
                weight: json.weight,
                hp: json.stats[0].base_stat,
                attack: json.stats[1].base_stat,
                defense: json.stats[2].base_stat,
                speed: json.stats[5].base_stat
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
                    placeholder="Search pokemon"
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