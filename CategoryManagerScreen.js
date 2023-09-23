
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function CategoryManagerScreen() {
    // Definerer en liste over kategorier, som bruges til at vise kategorierne i FlatList
  const categories = [
    'Fødevarer',
    'Husholdning',
    'Tøj',
    'Elektronik',
    'Skønhed',
    'Sport',
  ];

  return (
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
                onPress={() => {}}
                color="blue" 
              />
              <Button
                title="Slet"
                onPress={() => {}}
                color="#FF3B30" 
              />
            </View>
          </View>
        )}
      />
      <Button
        title="Tilføj kategori"
        onPress={() => {}}
        color="blue" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333', 
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  categoryText: {
    fontSize: 18,
    color: '#333333', 
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
