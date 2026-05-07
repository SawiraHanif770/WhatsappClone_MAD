import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// Importing Screens
import ChatScreen from './src/screens/ChatScreen';
import StatusScreen from './src/screens/StatusScreen';
import CallScreen from './src/screens/CallScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Chats') iconName = 'chat';
            else if (route.name === 'Status') iconName = 'update';
            else if (route.name === 'Calls') iconName = 'call';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#075E54',
          tabBarInactiveTintColor: 'gray',
          headerStyle: { backgroundColor: '#075E54' },
          headerTintColor: '#fff',
        })}
      >
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}