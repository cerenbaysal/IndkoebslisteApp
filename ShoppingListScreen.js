import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getData } from './storage'; // Importerer datahentningsfunktion

function ShoppingListScreen({navigation}) {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    // Henter indkøbslisten fra den lokale database ved hjælp af getData
    
    const fetchShoppingList = async () => {
      const data = await getData('shoppingList'); // 'shoppingList' er nøglen til data i AsyncStorage
      if (data) {
        setShoppingList(data);
      }
    };

    fetchShoppingList();
    

  }, []);

 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indkøbsliste:</Text>
      <FlatList
        data={shoppingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
            <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item}</Text>
          <Button title="Fjern" 
          color='blue'/>
    </View>
  )}
  /> 
  <Button
        title="Tilføj nyt element"
        onPress={() => navigation.navigate('AddItem')}
        color="blue"
      /></View>
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
        itemContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 8,
        },
        itemText: {
          fontSize: 16,
          marginRight: 8,
          color: '#333333', 
        },
      });
    
export default ShoppingListScreen;
