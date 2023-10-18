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
  
  // Styling for en elementbeholder 
  itemContainer: {
    flexDirection: 'row',   // Elementer er placeret i en række (horisontalt)
    alignItems: 'center',   // Elementer er centreret lodret
    marginBottom: 8,        // Bundmargen er 8 enheder
  },
  
  // Styling for tekst i elementbeholderen
  itemText: {
    fontSize: 16,           // Skriftstørrelse er 16 enheder
    marginRight: 8,         // Højremargen er 8 enheder (afstand til højre)
    color: '#333333',       // Tekstfarven er en mørk grå nuance
  },
  
  // Styling for knappen
  button: {
    color: 'blue',          // Tekstfarven er blå
  },
});

// Eksporterer stylingobjekterne, så de kan bruges i min komponent
export default styles;
