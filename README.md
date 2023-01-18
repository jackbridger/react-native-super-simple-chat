# react-native-super-simple-chat

A super simple chat UI SDK based, inspired by Material UI

## Installation

```sh
npm install react-native-super-simple-chat
```

## Usage

```js
import { MessageBubble } from 'react-native-super-simple-chat';

export default function App() {
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
