import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MessageBubble } from 'react-native-super-simple-chat';

export default function App() {
  // generate an array of 10 messages in a human conversation. Each message is an object with a text property and a userID property.
  const messages = [
    { text: 'Hi', userID: 1 },
    { text: 'Hi', userID: 2 },
    { text: 'How are you?', userID: 1 },
    { text: 'I am good, how are you?', userID: 2 },
    { text: 'Not bad', userID: 1 },
  ];

  return (
    <View style={styles.container}>
      {messages.map((msg) => (
        <MessageBubble text={msg.text} isSender={msg.userID === 1} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
