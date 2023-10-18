import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../styles/HomeScreenStyle'; // Importer styling fra styles-filen

function HomeScreen({ navigation }) {
  return (
    // Hovedcontaineren for startsiden med styling fra 'HomeScreenStyle'
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til Indkøbslisten!</Text>
      <Button
        title="Gå til Indkøbsliste"
        onPress={() => navigation.navigate('ShoppingList')}
        color={styles.button.color} // Brug farve fra styles
      />
      <Button
        title="Tilføj nyt element"
        onPress={() => navigation.navigate('AddItem')}
        color={styles.button.color} // Brug farve fra styles
      />
      <Button
        title="Opret en kategori"
        onPress={() => navigation.navigate('CategoryManager')}
        color={styles.button.color} // Brug farve fra styles
      />
      <Button
        title="Del liste"
        onPress={() => navigation.navigate('ShareList')}
        color={styles.button.color} // Brug farve fra styles
      />
    </View>
  );
}

export default HomeScreen;
