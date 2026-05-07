import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const statusData = [
  { id: '1', name: 'Zohaib', time: '12 minutes ago' },
  { id: '2', name: 'Ayesha', time: '55 minutes ago' },
  { id: '3', name: 'Usman', time: 'Today, 2:30 PM' },
];

export default function StatusScreen() {
  return (
    <View style={styles.container}>
      {/* My Status Section */}
      <View style={styles.myStatus}>
        <View style={styles.avatarPlaceholder}>
          <MaterialIcons name="person" size={40} color="white" />
          <View style={styles.addIcon}>
             <MaterialIcons name="add-circle" size={20} color="#25D366" />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>My Status</Text>
          <Text style={styles.msgText}>Tap to add status update</Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Recent updates</Text>

      {/* Status List using Dummy Data  */}
      <FlatList
        data={statusData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.statusBox}>
            <View style={[styles.avatarPlaceholder, { borderColor: '#25D366', borderWidth: 2 }]} />
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.msgText}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  myStatus: { flexDirection: 'row', padding: 15, alignItems: 'center' },
  sectionHeader: { backgroundColor: '#f2f2f2', padding: 8, color: 'gray', fontWeight: 'bold' },
  statusBox: { flexDirection: 'row', padding: 15, alignItems: 'center', borderBottomWidth: 0.5, borderColor: '#ececec' },
  avatarPlaceholder: { width: 55, height: 55, borderRadius: 27.5, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' },
  addIcon: { position: 'absolute', bottom: 0, right: 0, backgroundColor: 'white', borderRadius: 10 },
  textContainer: { marginLeft: 15 },
  nameText: { fontWeight: 'bold', fontSize: 16 },
  msgText: { color: 'gray', marginTop: 2 },
});