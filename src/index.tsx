import React from 'react';
import { View, Text } from 'react-native';

export function MessageBubble(props: { text: string; isSender: boolean }) {
  const { text, isSender } = props;
  return (
    <View
      style={{
        width: '65%',
        marginVertical: 3,
        marginHorizontal: 16,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 5,
        alignSelf: isSender ? 'flex-start' : 'flex-end',
        backgroundColor: isSender ? '#fad1d0' : '#dfffc7',
      }}
    >
      <Text
        style={{
          fontSize: 16,
          width: '65%',
          left: isSender ? 0 : 10,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
