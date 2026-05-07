import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, subtitle, rightText, icon }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.avatar}>{icon}</View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {rightText && <Text style={styles.rightText}>{rightText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' },
  content: { flex: 1, marginLeft: 15 },
  title: { fontWeight: 'bold', fontSize: 16 },
  subtitle: { color: 'gray', marginTop: 2 },
  rightText: { color: 'gray', fontSize: 12 },
});

export default Card;