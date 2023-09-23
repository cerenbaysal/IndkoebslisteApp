import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// ShareListScreen-komponenten viser en liste over delte indkøbslister
export default function ShareListScreen() {
    // Liste over delte indkøbslister med id og navn
  const sharedLists = [
    { id: 1, name: 'Indkøbsliste til fest' },
    { id: 2, name: 'Familieindkøb' },
    { id: 3, name: 'Ugentlig madplan' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delte Indkøbslister</Text>
      <FlatList
        data={sharedLists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.sharedList}>
            <Text style={styles.sharedListName}>{item.name}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Se detaljer"
                onPress={() => {}}
                color="blue" // Blå farve
              />
              <Button
                title="Del"
                onPress={() => {}}
                color="#4CD964" // Grøn farve
              />
              <Button
                title="Slet"
                onPress={() => {}}
                color="#FF3B30" // Rød farve
              />
            </View>
          </View>
        )}
      />
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
    color: '#333333', 
  },
  sharedList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  sharedListName: {
    fontSize: 18,
    color: '#333333', 
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
