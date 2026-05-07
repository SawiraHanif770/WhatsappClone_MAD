import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const callData = [
  { id: '1', name: 'Mama', time: 'May 5, 10:20 PM', type: 'incoming' },
  { id: '2', name: 'Zain', time: 'May 4, 11:15 AM', type: 'outgoing' },
];

export default function CallScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={callData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.callBox}>
            <View style={styles.avatarPlaceholder}>
                <MaterialIcons name="person" size={35} color="white" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons 
                  name={item.type === 'incoming' ? 'call-received' : 'call-made'} 
                  size={16} 
                  color={item.type === 'incoming' ? 'red' : 'green'} 
                />
                <Text style={styles.msgText}> {item.time}</Text>
              </View>
            </View>
            <MaterialIcons name="call" size={24} color="#075E54" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  callBox: { flexDirection: 'row', padding: 15, alignItems: 'center', borderBottomWidth: 0.5, borderColor: '#ececec' },
  avatarPlaceholder: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' },
  textContainer: { flex: 1, marginLeft: 15 },
  nameText: { fontWeight: 'bold', fontSize: 16 },
  msgText: { color: 'gray', marginTop: 2 },
});