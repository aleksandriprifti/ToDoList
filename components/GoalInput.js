import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import React from "react";

const GoalInput = ({
  enteredGoalText,
  goalInputhandler,
  addGoalhandler,
  visible,
  closeModal,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={enteredGoalText}
          onChangeText={goalInputhandler}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalhandler} title="Add Goal" color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel " onPress={closeModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    backgroundColor: "#e4d0ff",
    color: "#120438",
  },
  buttonContainer: {
    marginTop: 18,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
