import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getData } from '../storage'; // Importerer datahentningsfunktion
import styles from '../styles/ShoppingListScreenStyle'; 

function ShoppingListScreen({ navigation }) {
  // Bruger en state-variabel 'shoppingList' til at opbevare indkøbslisten
  const [shoppingList, setShoppingList] = useState([]);
// useEffect køres, når komponenten indlæses, og henter indkøbslisten fra lagring
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

    fetchShoppingList();// Kald funktionen for at hente indkøbslisten fra lagring
  }, []); // Tomt array som andet argument betyder, at useEffect kun køres ved komponentens oprettelse

  return (
    // Hovedcontaineren for skærmbilledet med styling fra 'ShoppingListScreenStyle'
    // linje 32: Overskriftstekst med styling
    // linje 33: En liste (FlatList) til visning af indkøbslisten med elementer
    // linje 38: Tekst for hvert element med styling
    // linje 39: En knap for at fjerne elementet med styling
    // linje 43-46: En knap til at tilføje et nyt element med styling og navigation
    <View style={styles.container}>
      <Text style={styles.title}>Indkøbsliste:</Text> 
      <FlatList
        data={shoppingList} // Data fra state 'shoppingList'
        keyExtractor={(item, index) => index.toString()} // Unik nøgle for hver listeindgang
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            <Button title="Fjern" color={styles.button.color} />
          </View>
        )}
      />
      <Button
        title="Tilføj nyt element"
        onPress={() => navigation.navigate('AddItem')} // Navigation til en anden skærm ved tryk på knappen
        color={styles.button.color}
      />
    </View>
  );
}

export default ShoppingListScreen;
