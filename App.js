import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MobileCalendar from 'react-scroll-calendar';
import moment from 'moment';
// import "react-scroll-calendar/build/react-scroll-calendar.css";

export default function App() {
  const [mDateNum, setMDateNum] = useState("0");
  const mComingColor = { key: 'mcome', color: 'red' };
  const marked = {
    "2023-02-14": { selected: true, marked: true, selectedColor: "#F67280" },
    "2020-09-05": { selected: true, marked: true, selectedColor: "#F67280" },
  };
  const [selectedDate, setSelectedDate] = useState('');
  onChanged = (text) => {
    setMDateNum(text)
  }

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
      <MobileCalendar
        
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
