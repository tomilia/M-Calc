import { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarHome() {
  const [mDateNum, setMDateNum] = useState("0");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

  const marked = {  
    "2023-02-14": { selected: true, marked: true, selectedColor: "#F67280" },
    "2020-09-05": { selected: true, marked: true, selectedColor: "#F67280" },
  };
  onChanged = (text) => {
    setMDateNum(text)
  }
  selectMenu = (day) =>  
  Alert.alert('Alert Title', day, [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);


  return (
    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        underlineColorAndroid="red"
        onChangeText={(text) => this.onChanged(text)}
        value={mDateNum}
        placeholder="Enter text"
        placeholderTextColor="#ccc"
        borderWidth={1}
        borderColor="#ccc"
        borderRadius={4}

      />
      <View style={{ marginTop: 16 }}>
      <Calendar
          markedDates={ marked }
          onDayPress={(day) => selectMenu(day.dateString)}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: '#333',
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
