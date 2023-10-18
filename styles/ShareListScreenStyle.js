import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Styling for den overordnede container i komponenten
  container: {
    flex: 1,                    // Deler skærmen lige store dele med andre elementer
    padding: 16,                // 16 enheder indvendig polstring på alle sider
    backgroundColor: 'beige',   // Baggrundsfarven er beige
  },

  // Styling for en overskrift i komponenten
  title: {
    fontSize: 24,           // Skriftstørrelse er 24 enheder
    fontWeight: 'bold',     // Skriftvægten er fed
    marginBottom: 16,       // Bundmargen er 16 enheder
    color: '#333333',       // Tekstfarven er en mørk grå nuance
  },

  // Styling for en delt liste 
  sharedList: {
    flexDirection: 'row',         // Elementer er placeret i en række (horisontalt)
    justifyContent: 'space-between', // Elementer er fordelt jævnt i rækken med plads imellem dem
    alignItems: 'center',         // Elementer er centreret lodret
    borderBottomWidth: 1,         // En bundlinje med en bredde på 1 enhed
    borderBottomColor: '#ccc',    // Bundlinjens farve er en lysegrå nuance
    paddingVertical: 8,          // Indvendig polstring på 8 enheder, både over og under elementerne
  },

  // Styling for navnet på en delt liste
  sharedListName: {
    fontSize: 18,               // Skriftstørrelse er 18 enheder
    color: '#333333',           // Tekstfarven er en mørk grå nuance
  },

  // Styling for en knap 
  buttonContainer: {
    flexDirection: 'row',       // Elementer i knapcontaineren er placeret i en række (horisontalt)
  },
  button: {
    color: 'blue',              // Tekstfarven er blå
  },
});

// Eksporterer stylingobjekterne, så de kan bruges i min komponent
export default styles;
