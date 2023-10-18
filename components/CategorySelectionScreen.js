
import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, StyleSheet, Text } from 'react-native';
import { getData } from '../storage';
import styles from '../styles/CategorySelectionScreenStyle';

function CategorySelectionScreen({ navigation }) {
    // Bruger en state-variabel 'categories' til at opbevare kategorier
  const [categories, setCategories] = useState([]);
  
// useEffect køres, når komponenten indlæses, og henter kategorier fra lagring
  useEffect(() => {
      // Funktionen fetchCategories henter kategorier asynkront fra lagring
    const fetchCategories = async () => {
      const data = await getData('categories');
      // Opdaterer state 'categories' med de hentede kategorier, hvis der er data tilgængelige
      if (data) {
        setCategories(data);
      }
    };

    fetchCategories(); // Kald funktionen for at hente kategorier fra lagring
  }, []); // Tomt array som andet argument betyder, at useEffect kun køres ved komponentens oprettelse

  return (
      // Hovedcontaineren for skærmbilledet med styling fra 'CategorySelectionScreenStyle'
    <View style={styles.container}>
      <Text style={styles.title}>Vælg en kategori:</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Button
            title={item}
            onPress={() => {
              // Implementerer logikken for at tilføje elementet til den valgte kategori (dette virker ikke)
              const onAddToCategory = async () => {
                if (selectedCategory && selectedItem) {
                  // Henter de eksisterende kategorier fra AsyncStorage
                  const existingCategories = await getData('categories');
              
                  // Opretter en kategori, hvis den ikke allerede eksisterer
                  if (!existingCategories.includes(selectedCategory)) {
                    existingCategories.push(selectedCategory);
                    await saveData('categories', existingCategories);
                  }
              
                  // Henter de eksisterende kategorier for det valgte produkt
                  const existingProductCategories = await getData('productCategories');
              
                  // Opretter et nyt objekt, der indeholder produktet og dets valgte kategori
                  const productCategory = {
                    product: selectedItem,
                    category: selectedCategory,
                  };
              
                  existingProductCategories.push(productCategory);
              
                  // Gemmer de opdaterede produktkategorier i AsyncStorage
                  await saveData('productCategories', existingProductCategories);
                  
                  // Nulstiller inputfelter og valgt kategori
                  setSelectedCategory('');
                  setSelectedItem('');
              
                  // Går tilbage til forrige skærm eller navigerer til en anden destination
                  navigation.goBack();
                }
              };
              
            }}
            color="blue"
          />
        )}
      />
    </View>
  );
}


export default CategorySelectionScreen;
