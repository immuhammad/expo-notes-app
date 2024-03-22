import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

const ForgotPasswordModal = ({ isVisible, closeModal }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.text}>
            A password reset link has been sent to your registered email.
          </Text>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.button}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000B2",
  },
  modalContent: {
    width: 330,
    padding: 20,
    backgroundColor: "#FFFFFF00",
    alignItems: "center",
    height: 190,
    padding: 32,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    borderBlockColor: "#FFFFFF14",
  },
  text: {
    width: "100%",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    padding: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  button: {
    width: 328,
    height: 61,
    padding: 15,
    backgroundColor: "#F88D2A",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    borderStartWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: "white",
  },
});

export default ForgotPasswordModal;
