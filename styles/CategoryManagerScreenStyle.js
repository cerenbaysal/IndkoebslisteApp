import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Styling for den overordnede container i komponenten
  container: {
    flex: 1,                // Deler skærmen lige store dele med andre elementer
    padding: 16,            // 16 enheder indvendig polstring på alle sider
    backgroundColor: '#FFFFFF', // Baggrundsfarven er hvid 
  },

  // Styling for en overskrift i komponenten
  title: {
    fontSize: 24,           // Skriftstørrelse er 24 enheder
    fontWeight: 'bold',     // Skriftvægten er fed
    marginBottom: 16,       // Bundmargen er 16 enheder
    color: '#333333',       // Tekstfarven er en mørk grå nuance
  },

  // Styling for et kategori-element
  categoryItem: {
    flexDirection: 'row',         // Elementer er placeret i en række (horisontalt)
    justifyContent: 'space-between', // Elementer er fordelt jævnt i rækken med plads imellem dem
    alignItems: 'center',         // Elementer er centreret lodret
    borderBottomWidth: 1,         // En bundlinje med en bredde på 1 enhed
    borderBottomColor: '#ccc',    // Bundlinjens farve er en lysegrå nuance
    paddingVertical: 8,          // Indvendig polstring på 8 enheder, både over og under elementerne
  },

  // Styling for tekst i kategori-elementet
  categoryText: {
    fontSize: 18,               // Skriftstørrelse er 18 enheder
    color: '#333333',           // Tekstfarven er en mørk grå nuance
  },

  // Styling for knapcontaineren
  buttonContainer: {
    flexDirection: 'row',       // Elementer i knapcontaineren er placeret i en række (horisontalt)
  },
  
  // Styling for en knap 
  button: {
    color: 'blue',              // Tekstfarven er blå
  },

  // Styling for en container til at oprette en ny kategori
  newCategoryInputContainer: {
    flexDirection: 'row',       // Elementer i containeren er placeret i en række (horisontalt)
    alignItems: 'center',       // Elementer er centreret lodret
    marginBottom: 16,          // Bundmargen er 16 enheder
  },

  // Styling for inputfeltet til at oprette en ny kategori
  newCategoryInput: {
    flex: 1,                   // Tager op al tilgængelig plads i rækken
    borderWidth: 1,            // En kantlinje med en bredde på 1 enhed
    borderColor: '#ccc',       // Kantlinjens farve er en lysegrå nuance
    padding: 8,                // 8 enheder indvendig polstring på alle sider
    marginRight: 8,            // Højremargen er 8 enheder (afstand til højre)
  },

  // Styling for knappen til at oprette en ny kategori 
  createCategoryButton: {
    color: 'blue',              // Tekstfarven er blå
  },
});

// Eksporterer stylingobjekterne, så de kan bruges i min komponent
export default styles;
