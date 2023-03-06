import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function App() {
  const [mDateNum, setMDateNum] = useState("0");
  const mComingColor = {key:'mcome', color:'red'};
  const marked = {
    '2023-02-15': {"color": "rbga(255, 255, 255, .30)", "dotColor": "#E892F8", "marked": true},
    '2023-02-11': {"color": "rbga(255, 255, 255, .30)", "dotColor": "#E892F8", "marked": true},
  };
  const [selectedDate, setSelectedDate] = useState('');
  onChanged = (text) =>
  {
    setMDateNum(text)
  }

  return (
    <View style={{ justifyContent: 'center',flex: 1, alignItems: 'center' }}>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        underlineColorAndroid="red"
        onChangeText={(text) => this.onChanged(text)}
        value={mDateNum}
        placeholder="Enter text"
        placeholderTextColor="#ccc"
        onDayPress={(day) => setSelectedDate(day.dateString)}
        borderWidth={1}
        borderColor="#ccc"
        borderRadius={4}
        markingType="multi-dot"
        markedDates={{marked}}
      />
      <View style={{ marginTop: 16 }}>
        <Calendar/>
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
