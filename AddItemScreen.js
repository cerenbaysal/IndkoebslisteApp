import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { saveData, getData } from './storage'; // Importerer datalagringsfunktioner

function AddItemScreen({ navigation }) {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]); // Deklarerer og initialiserer shoppingList

  // Henter indkøbslisten ved skærmstart
  useEffect(() => {
    const fetchShoppingList = async () => {
      const data = await getData('shoppingList');
      if (data) {
        setShoppingList(data);
      }
    };

    fetchShoppingList();
  }, []);

  const addItemToShoppingList = async () => {
    if (item) {
      const updatedShoppingList = [...shoppingList, item]; // Opretter en kopi af den eksisterende indkøbsliste og tilføjer det nye element
      await saveData('shoppingList', updatedShoppingList); // Gemmer den opdaterede indkøbsliste i AsyncStorage
      setShoppingList(updatedShoppingList); // Opdaterer den lokale state med den nye indkøbsliste
      setItem(''); // Nulstiller inputfeltet
      navigation.navigate('ShoppingList'); // Går tilbage til indkøbslisten
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tilføj nyt element</Text>
      <TextInput
        style={styles.input}
        placeholder="Indtast varenavn"
        value={item}
        onChangeText={(text) => setItem(text)}
      />
      <Button title="Tilføj til indkøbsliste" onPress={addItemToShoppingList}
      color="blue" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'beige', 
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'black', 
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      marginBottom: 16,
      color: 'black', 
    },
  });

export default AddItemScreen;


