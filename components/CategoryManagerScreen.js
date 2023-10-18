import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import { getData, saveData } from '../storage'; // Importér datalagringsfunktioner
import styles from '../styles/CategoryManagerScreenStyle';

export default function CategoryManagerScreen() {
  // Bruger en state-variabel 'categories' til at opbevare kategorier
  const [categories, setCategories] = useState([]);
  // Bruger en state-variabel 'newCategoryName' til at opbevare det nye kategorinavn
  const [newCategoryName, setNewCategoryName] = useState(''); // Tilføj tilstanden for det nye kategorinavn

  // Henter kategorier fra AsyncStorage ved skærmstart
  useEffect(() => {
    // Funktionen fetchCategories henter kategorier asynkront fra lagring
    const fetchCategories = async () => {
      // Kalder getData-funktionen for at hente kategorier fra lagringen
      const data = await getData('categories');
      if (data) {
        // Opdaterer state 'categories' med de hentede kategorier, hvis der er data tilgængelige
        setCategories(data);
      }
    };

    fetchCategories();
  }, []); // Tomt array som andet argument betyder, at useEffect kun køres ved komponentens oprettelse

  // Funktion til at oprette en ny kategori og gemme den i AsyncStorage
  const createCategory = async () => {
    if (newCategoryName) {
      // Opretter en opdateret liste af kategorier, der inkluderer det nye kategorinavn
      const updatedCategories = [...categories, newCategoryName];
      // Gemmer de opdaterede kategorier i AsyncStorage
      await saveData('categories', updatedCategories);
      // Opdaterer state 'categories' med de nye kategorier
      setCategories(updatedCategories);
      setNewCategoryName(''); // Nulstil inputfeltet
    }
  };

  return (
    // Hovedcontaineren for skærmbilledet med styling fra 'CategoryManagerScreenStyle'
    <View style={styles.container}>
      <Text style={styles.title}>Kategorier</Text>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Se detaljer"
                onPress={() => {
                  // manlger logik
                }}
                color={styles.button.color}
              />
              <Button
                title="Slet"
                onPress={() => {
                  // mangler logik
                }}
                color="#FF3B30"
              />
            </View>
          </View>
        )}
      />
      <View style={styles.newCategoryInputContainer}>
        <TextInput
          style={styles.newCategoryInput}
          placeholder="Indtast navn på ny kategori"
          value={newCategoryName} // Værdi af inputfeltet er det nye kategorinavn
          onChangeText={text => setNewCategoryName(text)} // Opdaterer 'newCategoryName' 
        />
        <Button
          title="Opret kategori"
          onPress={createCategory} // Kalder funktionen 'createCategory' ved knaptryk
          color={styles.button.color} // Farven på knappen er hentet fra styling
        />
      </View>
    </View>
  );
}
