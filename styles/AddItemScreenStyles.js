import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Styling for den overordnede container i komponenten
  container: {
    flex: 1,                // Deler skærmen lige store dele med andre elementer
    padding: 16,            // 16 enheder indvendig polstring på alle sider
    backgroundColor: 'beige', // Baggrundsfarven er beige
  },

  // Styling for en overskrift i komponenten
  title: {
    fontSize: 24,           // Skriftstørrelse er 24 enheder
    fontWeight: 'bold',     // Skriftvægten er fed
    marginBottom: 16,       // Bundmargen er 16 enheder
    color: 'black',         // Tekstfarven er sort
  },

  // Styling for et inputfelt
  input: {
    borderWidth: 1,          // En kantlinje med en bredde på 1 enhed
    borderColor: '#ccc',     // Kantlinjens farve er en lysegrå nuance
    padding: 8,              // 8 enheder indvendig polstring på alle sider
    marginBottom: 16,       // Bundmargen er 16 enheder
    color: 'black',         // Tekstfarven i inputfeltet er sort
  },
});

// Eksporterer stylingobjekterne, så de kan bruges i min komponent
export default styles;

