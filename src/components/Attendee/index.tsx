import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface AttendeeProps {
  name: string;
  onRemove: (name: string) => void;
}

export function Attendee({ name, onRemove }: AttendeeProps) {
  function handleRemoveAttendee() {
    onRemove(name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleRemoveAttendee}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
