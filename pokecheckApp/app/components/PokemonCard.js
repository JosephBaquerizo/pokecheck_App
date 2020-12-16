import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import ColorType from "./ColorType";
import Modal from "./Modal";

const PokemonCard = ({ name, 
                       image, 
                       typeList, 
                       id, 
                       weight, 
                       height,
                       hp,
                       attack,
                       defense,
                       specialAttack,
                       specialDefense,
                       speed }) => {

    const [showModal, setShowModal] = useState(false);

    const card_id = `N #${id}`;
    const card_name = capitalize(name);
    const type = typeList.split("/")[0];


    const onPress = () => {
        setShowModal(true);
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    borderWidth: 3,
                    borderColor: ColorType[type],
                    marginTop: 15,
                    marginBottom: 13,
                    marginRight: 8,
                    marginLeft: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 110
                }}>
                    <View>
                        <Image 
                        style={styles.picture} 
                        source={{uri:`${image}`}}
                        />
                    </View>
                    <Text>
                        {card_id}
                    </Text>
                    <Text style={styles.textName}>
                        {card_name}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal isVisible={showModal} setIsVisible={setShowModal}>
                <View style={styles.modal}>
                    <View style={styles.leftModal}>
                        <Image 
                            style={styles.pictureModal} 
                            source={{uri:`${image}`}}
                        />
                    </View>
                    <View style={styles.rightModal}>
                        <View style={styles.description}>
                            <Text style={styles.data}>Id:</Text>
                            <Text>{`${id}`}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.data}>Name:</Text>
                            <Text>{`${card_name}`}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.data}>Type:</Text>
                            <Text>{`${typeList}`}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.data}>Height:</Text>
                            <Text>{`${parseFloat(Math.round(height/10*100)/100).toFixed(1)} m`}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.data}>Weight:</Text>
                            <Text>{`${parseFloat(Math.round(weight/10*100)/100).toFixed(1)} kg`}</Text>
                        </View>
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={styles.barContainer}>
                            <View style={styles.statData}>
                                <Text style={styles.data}>HP</Text>
                                <Text>{`${hp}`}</Text>
                            </View>
                        <ProgressBar progress={hp/120} color={Colors.red800}/>
                        </View>
                        <View style={styles.barContainer}>
                            <View style={styles.statData}>
                                <Text style={styles.data}>Attack</Text>
                                <Text>{`${attack}`}</Text>
                            </View>
                        <ProgressBar progress={attack/120} color={Colors.yellow800}/>
                        </View>
                        <View style={styles.barContainer}>
                            <View style={styles.statData}>
                                <Text style={styles.data}>Defense</Text>
                                <Text>{`${defense}`}</Text>
                            </View>
                        <ProgressBar progress={defense/120} color={Colors.blue800}/>
                        </View>
                        <View style={styles.barContainer}>
                            <View style={styles.statData}>
                                <Text style={styles.data}>Speed</Text>
                                <Text>{`${speed}`}</Text>
                            </View>
                        <ProgressBar progress={speed/120} color={Colors.green800}/>
                        </View>
                    </View>
                </View>
            </Modal>
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
        height: 100
    },
    statData: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    pictureModal: {
        width: 140,
        height: 140
    },
    barContainer: {
        marginTop: 1
    },
    statsContainer: {
        width: "70%",
        justifyContent: "flex-start"
    },
    containerPic: {
        backgroundColor: "red"
    },
    textName: {
        fontWeight: "bold",
        marginBottom: 2
    },
    modal: {
        flexDirection: "column",
        alignItems: "center"
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
        marginTop:3
    },
    nameStyle: {
        fontWeight: "bold",
        marginBottom: 5
    },
    data: {
        fontWeight: "bold"
    }
});

export default PokemonCard;