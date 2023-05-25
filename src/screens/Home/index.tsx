import { Attendee } from "../../components/Attendee";
import { Text, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { AddAttendee } from "../../components/AddAttendee";
import { useState } from "react";

export default function Home() {
  const [attendees, setAttendees] = useState<string[]>([]);

  function addAttendee(name: string) {
    if (attendees.includes(name)) {
      return Alert.alert(
        "Participante já existe",
        `Você não pode adicionar outro participante chamado ${name}`
      );
    }
    setAttendees((prevState) => [...prevState, name]);
  }

  function removeAttendee(name: string) {
    setAttendees(attendees.filter((attendeeName) => attendeeName !== name));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Aniversário do Felipe</Text>
      <Text style={styles.eventDate}>Quarta, 24 de Maio de 2023</Text>
      <AddAttendee onAdd={addAttendee} />
      <FlatList
        data={attendees}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou ainda</Text>
        )}
        renderItem={({ item }) => (
          <Attendee key={item} name={item} onRemove={removeAttendee} />
        )}
      />
    </View>
  );
}
