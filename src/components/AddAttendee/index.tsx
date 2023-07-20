import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface AddAttendeeProps {
  onAdd: (name: string) => void;
}

export function AddAttendee({ onAdd }: AddAttendeeProps) {
  const [inputValue, setInputValue] = useState("");

  function handleAddAttendee() {
    if (inputValue !== "") {
      onAdd(inputValue);
      setInputValue("");
    }
  }

  function handleKeyPress(event: any) {
    if (event.nativeEvent.key === "Enter") {
      handleAddAttendee();
    }
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        value={inputValue}
        onChangeText={setInputValue}
        onKeyPress={handleKeyPress}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddAttendee}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
