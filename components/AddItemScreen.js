import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { saveData, getData } from '../storage'; // Importerer datalagringsfunktioner
import styles from '../styles/AddItemScreenStyles'; // Importér stylingen

function AddItemScreen({ navigation }) {
  // Bruger en state-variabel 'item' til at opbevare den indtastede vare
  const [item, setItem] = useState('');
  // Bruger en state-variabel 'shoppingList' til at opbevare indkøbslisten
  const [shoppingList, setShoppingList] = useState([]); // Deklarerer og initialiserer shoppingList

  // Henter indkøbslisten ved skærmstart
  useEffect(() => {
    // Funktionen fetchShoppingList henter indkøbslisten asynkront fra lagring
    const fetchShoppingList = async () => {
      // Kalder getData-funktionen for at hente indkøbslisten fra lagringen
      const data = await getData('shoppingList');
      if (data) {
        // Opdaterer state 'shoppingList' med de hentede data, hvis der er data tilgængelige
        setShoppingList(data);
      }
    };

    fetchShoppingList();
  }, []); // Tomt array som andet argument betyder, at useEffect kun køres ved komponentens oprettelse

// Funktion til at tilføje et nyt element til indkøbslisten
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
    // Hovedcontaineren for skærmbilledet med styling fra 'AddItemScreenStyles'
    <View style={styles.container}>
        <Text style={styles.title}>Tilføj nyt element</Text>
      <TextInput
        style={styles.input}
        placeholder="Indtast varenavn"
        value={item} // Værdien af inputfeltet er det indtastede varenavn
        onChangeText={(text) => setItem(text)} // Opdaterer 'item' ved tekstændringer
      />
      <Button title="Tilføj til indkøbsliste" onPress={addItemToShoppingList}
      color="blue" />
      <Button
  title="Tilføj til kategori"
  onPress={() => navigation.navigate('CategorySelection')} // Navigerer til kategorivælgerskærmen
  color="green"
/>
    </View>
  );
}

export default AddItemScreen;



