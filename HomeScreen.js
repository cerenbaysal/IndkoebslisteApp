import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
// HomeScreen-komponenten tager "navigation" som en prop, der giver mulighed for at navigere til andre skærme
function HomeScreen({ navigation }) {
  return (
   <View style={styles.container}>
       <Text style={styles.title}>Velkommen til Indkøbslisten!</Text>
      <Button
        title="Gå til Indkøbsliste"
        onPress={() => navigation.navigate('ShoppingList')}
        color="#333333"
      />
      <Button
        title="Tilføj nyt element"
        onPress={() => navigation.navigate('AddItem')}
        color="#333333" 
      />
      <Button
      title='Opret en kategori'
      onPress={() => navigation.navigate('CategoryManager')}
      color="#333333" 
       />
      <Button
      title='Del liste'
      onPress={() => navigation.navigate('ShareList')} 
      color="#333333" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'beige', 
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'black', 
    },
  });

export default HomeScreen;
