import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import {useVoice} from './hooks/useVoice';

export default function App() {
  const [isAvailable, isListening, startListening, stopListening] = useVoice();
  if (isAvailable)
    return (
      <View style={styles.container}>
        {!isListening && (
          <TouchableHighlight
            activeOpacity={0.4}
            underlayColor="#2398AB"
            onPress={startListening}>
            <View style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Start listening</Text>
            </View>
          </TouchableHighlight>
        )}
        {isListening && (
          <TouchableHighlight
            activeOpacity={0.4}
            underlayColor="#2398AB"
            onPress={stopListening}>
            <View style={styles.dangerButton}>
              <Text style={styles.primaryButtonText}>Stop listening</Text>
            </View>
          </TouchableHighlight>
        )}
      </View>
    );
  else return (
    <View style={styles.container}>
      <Text>Please give audio permission to continue..</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#00DFC8',
    padding: 10,
    borderRadius: 3,
  },
  primaryButtonText: {
    color: 'white',
  },
  dangerButton: {
    backgroundColor: '#EE3D48',
    padding: 10,
    borderRadius: 3,
  },
});
