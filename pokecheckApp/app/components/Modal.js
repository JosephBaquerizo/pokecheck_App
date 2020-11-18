import React from "react";
import { StyleSheet, View } from "react-native";
import { Overlay } from "react-native-elements";

const Modal = ({ isVisible, setIsVisible, children }) => {
    
    const closeModal = () => {
        setIsVisible(false);
    }

    return(
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
            onBackdropPress={closeModal}
        >
            <View>
                {children}
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: "auto",
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "black"
    }
});

export default Modal;