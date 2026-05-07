import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.iconGroup}>
        <TouchableOpacity><MaterialIcons name="search" size={24} color="white" style={styles.icon} /></TouchableOpacity>
        <TouchableOpacity><MaterialIcons name="more-vert" size={24} color="white" /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#075E54',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    elevation: 4, // Shadow for Android
  },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  iconGroup: { flexDirection: 'row' },
  icon: { marginRight: 20 }
});

export default Header;