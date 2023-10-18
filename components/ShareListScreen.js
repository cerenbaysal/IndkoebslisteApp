import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import styles from '../styles/ShareListScreenStyle';
// ShareListScreen-komponenten viser en liste over delte indkøbslister
export default function ShareListScreen() {
  // En liste af delte indkøbslister med unikke id'er og navne
  const sharedLists = [
    { id: 1, name: 'Indkøbsliste til fest' },
    { id: 2, name: 'Familieindkøb' },
    { id: 3, name: 'Ugentlig madplan' },
  ];

  return (
    // Hovedcontaineren for skærmbilledet med styling fra 'ShareListScreenStyle'
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
                color={styles.button.color}
              />
              <Button
                title="Del"
                onPress={() => {}}
                color="#4CD964"
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
    </View>
  );
}
