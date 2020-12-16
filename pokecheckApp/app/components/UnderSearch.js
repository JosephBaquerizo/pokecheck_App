import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import Loading from "./Loading";

const UnderSearch = ({ pokemon }) => {

    const capitalize = (s) => {
  		if (typeof s !== 'string') return ''
  		return s.charAt(0).toUpperCase() + s.slice(1)
	}

    const card_id = `N #${pokemon.id}`;
    const card_name = capitalize(pokemon.name);
    const type = pokemon.typeList;

    if ((pokemon !== "") && (pokemon !== "error")){
        return (
                <View style={styles.modal}>
                    <View style={styles.leftModal}>
                        <Image 
                            style={styles.picture} 
                            source={{uri: `${pokemon.image}`}}
                        />
                    </View>
                    <View style={styles.rightModal}>
                        <View style={styles.description}>
                            <Text style={styles.data}>Id:</Text>
                            <Text>{`${pokemon.id}`}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.data}>Name:</Text>
                            <Text>{`${card_name}`}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.data}>Type:</Text>
                            <Text>{`${type}`}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.data}>Height:</Text>
                            <Text>{`${parseFloat(Math.round(pokemon.height/10*100)/100).toFixed(1)} m`}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.data}>Weight:</Text>
                            <Text>{`${parseFloat(Math.round(pokemon.weight/10*100)/100).toFixed(1)} kg`}</Text>
                        </View>
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={styles.barContainer}>
                            <View style={styles.statData}>
                                <Text style={styles.data}>HP</Text>
                                <Text>{`${pokemon.hp}`}</Text>
                            </View>
                        <ProgressBar progress={pokemon.hp/120} color={Colors.red800}/>
                        </View>
                        <View style={styles.barContainer}>
                            <View style={styles.statData}>
                                <Text style={styles.data}>Attack</Text>
                                <Text>{`${pokemon.attack}`}</Text>
                            </View>
                        <ProgressBar progress={pokemon.attack/120} color={Colors.yellow800}/>
                        </View>
                        <View style={styles.barContainer}>
                            <View style={styles.statData}>
                                <Text style={styles.data}>Defense</Text>
                                <Text>{`${pokemon.defense}`}</Text>
                            </View>
                        <ProgressBar progress={pokemon.defense/120} color={Colors.blue800}/>
                        </View>
                        <View style={styles.barContainer}>
                            <View style={styles.statData}>
                                <Text style={styles.data}>Speed</Text>
                                <Text>{`${pokemon.speed}`}</Text>
                            </View>
                        <ProgressBar progress={pokemon.speed/120} color={Colors.green800}/>
                        </View>  
                    </View>                  
                </View>
        )
    } else if (pokemon === "error") {
        return (
            <View style={{marginLeft: 10}}>
                <Text style={{color: "red"}}>Ups! Something wrong happened</Text>
            </View>
        )
    } else {
        return (
            <View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    picture: {
        width: 100,
        height: 100
    },
    modal: {
        flexDirection: "column",
        alignItems: "center"
    },
    barContainer: {
        marginTop: 1
    },
    statData: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    statsContainer: {
        width: "70%",
        justifyContent: "flex-start"
    },
    leftModal: {
        alignItems: "center",
        justifyContent: "center"
    },
    modalText: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginTop: 7,
    },
    rightModal: {
        justifyContent: "center",
        marginBottom: 5,
        width: "70%"
    },
    description: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 3
    },
    nameStyle: {
        fontWeight: "bold",
        marginBottom: 5
    },
    data: {
        fontWeight: "bold"
    }
})

export default UnderSearch;