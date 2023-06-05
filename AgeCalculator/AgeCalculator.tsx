import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const App = () => {
  const [age, setAge] = useState('');
  const [calculatedAge, setCalculatedAge] = useState('');

  const calculateAge = () => {
    const inputAge = parseInt(age, 10);
    if (!isNaN(inputAge)) {
      setCalculatedAge(`You are ${inputAge}`);
    } else {
      setCalculatedAge('Invalid input.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Age Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={setAge}
        value={age}
      />
      <Button title="Calculate" onPress={calculateAge} />
      <Text>{calculatedAge}</Text>
    </View>
  );
};


export default App;
