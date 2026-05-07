import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const chatData = [
  { id: '1', name: 'Ali', message: 'Assalam o Alaikum, kahan ho?', time: '10:00 AM' },
  { id: '2', name: 'Sara', message: 'Assignment complete ho gaya?', time: '9:45 AM' },
  { id: '3', name: 'Zain', message: 'React Native is fun!', time: 'Yesterday' },
];

// Reusable Component for List Item
const ChatItem = ({ name, message, time }) => (
  <View style={styles.chatBox}>
    <View style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.msgText}>{message}</Text>
    </View>
    <Text style={styles.timeText}>{time}</Text>
  </View>
);

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ChatItem name={item.name} message={item.message} time={item.time} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  chatBox: { flexDirection: 'row', padding: 15, borderBottomWidth: 0.5, borderColor: '#ececec', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#ccc' },
  textContainer: { flex: 1, marginLeft: 15 },
  nameText: { fontWeight: 'bold', fontSize: 16 },
  msgText: { color: 'gray', marginTop: 2 },
  timeText: { color: 'gray', fontSize: 12 },
});