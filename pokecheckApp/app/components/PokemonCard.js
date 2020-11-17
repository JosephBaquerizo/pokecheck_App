import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";
import ColorType from "./ColorType";
import Modal from "./Modal";

const PokemonCard = ({ name, image, typeList, id, weight, height }) => {

    const [showModal, setShowModal] = useState(false);

    const card_id = `N #${id}`;
    const card_name = capitalize(name);
    const type = capitalize(typeList);

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
            </TouchableWithoutFeedback>
            <Modal isVisible={showModal} setIsVisible={setShowModal}>
                <View style={styles.modal}>
                    <View style={styles.leftModal}>
                        <Image 
                            style={styles.picture} 
                            source={{uri: `${image}`}}
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
                            <Text>{`${type}`}</Text>
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
                </View>
            </Modal>
        </View>
    )

};
//<Text style={styles.nameStyle}>{card_name}</Text>
const capitalize = (s) => {
  		if (typeof s !== 'string') return ''
  		return s.charAt(0).toUpperCase() + s.slice(1)
	}

const styles = StyleSheet.create({
    picture: {
        width: 125,
        height: 125
    },
    containerPic: {
        backgroundColor: "red"
    },
    textName: {
        fontWeight: "bold",
        marginBottom: 2
    },
    modal: {
        flexDirection: "row"
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
        marginLeft: 30,
        marginBottom: 5,
        width: "50%"
    },
    description: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6
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