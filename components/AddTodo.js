import { useState } from "react"
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState("")

  const handleAddTodo = () => {
    if (text.trim()) {
      onAddTodo(text)
      setText("")
    }
  }

  return (
    <View style={styles.addTodoForm}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo..."
        value={text}
        onChangeText={setText}
        placeholderTextColor="#95a5a6"
      />
      <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
        <Ionicons name="add-circle" size={48} color="#3498db" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  addTodoForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#bdc3c7",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#34495e",
    backgroundColor: "#fff",
  },
  addButton: {
    marginLeft: 10,
  },
})

export default AddTodo

