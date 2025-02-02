import { useState } from "react"
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos((prevTodos) => [{ id: Math.random().toString(), text, completed: false }, ...prevTodos])
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>My Todo List</Text>
      </View>
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#2c3e50",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ecf0f1",
    textAlign: "center",
  },
})

