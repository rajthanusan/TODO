import { FlatList, StyleSheet, View, Text } from "react-native"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No todos yet. Add one to get started!</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem todo={item} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    color: "#7f8c8d",
    textAlign: "center",
  },
})

export default TodoList

