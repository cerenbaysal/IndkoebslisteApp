// Importerer de nødvendige moduler fra 'react' og 'react-navigation' bibliotekerne
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Importerer de forskellige skærme fra de separate komponentfiler
import HomeScreen from './HomeScreen';
import ShoppingListScreen from './ShoppingListScreen';
import AddItemScreen from './AddItemScreen';
import CategoryManagerScreen from './CategoryManagerScreen';
import ShareListScreen from './ShareListScreen';

// Opretter en staknavigator ved hjælp af 'createStackNavigator' fra 'react-navigation'
const Stack = createStackNavigator();
// Denne komponent 'App' fungerer som rodkomponenten for min React Native-app
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name='CategoryManager' component={CategoryManagerScreen} />
        <Stack.Screen name='ShareList' component={ShareListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
