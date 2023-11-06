import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAtGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const goalInputhandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalhandler = () => {
    if (enteredGoalText) {
      setTodoList([
        ...todoList,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      setEnteredGoalText("");
      setModalIsVisible(false);
    }
  };

  const deleteGoalHandler = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAtGoalHandler}
        />
        <GoalInput
          enteredGoalText={enteredGoalText}
          goalInputhandler={goalInputhandler}
          addGoalhandler={addGoalhandler}
          visible={modalIsVisible}
          closeModal={endAddGoalHandler}
        />
        <GoalItem todoList={todoList} onDelteItem={deleteGoalHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
