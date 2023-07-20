import { useState } from "react";
import { Text, View, FlatList } from "react-native";
// import { Alert } from "react-native";
import { Attendee } from "../../components/Attendee";
import { AddAttendee } from "../../components/AddAttendee";
import { alert } from "../../utils/alert"
import { styles } from "./styles";
import { date } from "../../utils/date"

export default function Home() {
  const [attendees, setAttendees] = useState<string[]>([]);

  function addAttendee(name: string) {
    if (attendees.includes(name)) {
      // return Alert.alert( 
        return alert(
         "Participante já existe",
        `Você não pode adicionar outro participante chamado ${name}`
      );
    }
    setAttendees((prevState) => [...prevState, name]);
  }

  function removeAttendee(name: string) {
    setAttendees(prevState => prevState.filter((attendeeName) => attendeeName !== name));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento</Text>
      <Text style={styles.eventDate}>{date}</Text>
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
