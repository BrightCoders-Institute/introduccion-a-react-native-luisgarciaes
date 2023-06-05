import React, { useState } from 'react'
import { View, TextInput, Button, Text, StyleSheet } from 'react-native'

const AgeCalculatorApp = () => {
  const [age, setAge] = useState('')
  const [calculatedAge, setCalculatedAge] = useState('')

  const calculateAge = () => {
    const inputAge = parseInt(age, 10);
    if (!isNaN(inputAge)) {
      setCalculatedAge(`You are ${inputAge} years old.`)
    } else {
      setCalculatedAge('Invalid input. Please enter a valid age.')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Age Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={setAge}
        value={age}
        keyboardType="numeric"
      />

      <Button title="Calculate" onPress={calculateAge} />
      <Text style={styles.result}>{calculatedAge}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default AgeCalculatorApp;
