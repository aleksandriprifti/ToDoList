import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ todoList, onDelteItem }) => {
  return (
    <View style={styles.goalContainer}>
      <FlatList
        style={styles.todoList}
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => onDelteItem(item.id)}>
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item.text}</Text>
            </View>
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalContainer: {
    flex: 5,
  },
  todoList: {
    flex: 1,
  },
  todoItem: {
    backgroundColor: "#f7f7f7",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  todoText: {
    color: "green", // Text color
  },
});
