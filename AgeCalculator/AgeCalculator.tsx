import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const AgeCalculatorApp = () => {
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
    <View>
      <Text>Age Calculator</Text>
      <TextInput
        placeholder="Enter your age"
        onChangeText={setAge}
        value={age}
        keyboardType="numeric"
      />
      <Button title="Calculate" onPress={calculateAge} />
      <Text>{calculatedAge}</Text>
    </View>
  );
};

export default AgeCalculatorApp;
