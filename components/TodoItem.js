import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <View style={styles.todoItem}>
      <TouchableOpacity style={styles.todoTextContainer} onPress={() => onToggleTodo(todo.id)}>
        <Ionicons
          name={todo.completed ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={todo.completed ? "#27ae60" : "#3498db"}
          style={styles.icon}
        />
        <Text style={[styles.todoText, todo.completed && styles.completedTodo]}>{todo.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDeleteTodo(todo.id)} style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={24} color="#e74c3c" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  todoTextContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  todoText: {
    fontSize: 16,
    color: "#34495e",
  },
  completedTodo: {
    textDecorationLine: "line-through",
    color: "#7f8c8d",
  },
  deleteButton: {
    padding: 5,
  },
})

export default TodoItem

