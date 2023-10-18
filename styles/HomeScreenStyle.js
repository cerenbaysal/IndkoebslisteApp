import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Styling for den overordnede container i komponenten
  container: {
    flex: 1,                     // Deler skærmen lige store dele med andre elementer
    justifyContent: 'center',    // Centrerer elementer vandret (horisontalt) i containeren
    alignItems: 'center',        // Centrerer elementer lodret i containeren
    backgroundColor: 'beige',    // Baggrundsfarven er beige
  },

  // Styling for en overskrift i komponenten
  title: {
    fontSize: 24,           // Skriftstørrelse er 24 enheder
    fontWeight: 'bold',     // Skriftvægten er fed
    marginBottom: 16,       // Bundmargen er 16 enheder
    color: 'black',         // Tekstfarven er sort
  },

  // Styling for en knap 
  button: {
    color: '#333333',       // Tekstfarven er en mørk grå nuance
  },
});

// Eksporterer stylingobjekterne, så de kan bruges i min komponent
export default styles;
