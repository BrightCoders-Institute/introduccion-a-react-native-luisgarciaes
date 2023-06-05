import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AgeCalculatorApp from './AgeCalculator';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <AgeCalculatorApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
