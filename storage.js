import AsyncStorage from '@react-native-async-storage/async-storage';
// Funktionen `saveData` bruges til at gemme data i AsyncStorage (en lokal databaselager)
export const saveData = async (key, data) => {
    try {
        // Gemmer data som en JSON-streng med den angivne nøgle (key)
      await AsyncStorage.setItem(key, JSON.stringify(data));
      console.log('Data blev gemt:', data); // Udskriver gemt data til konsollen for bekræftelse
    } catch (error) {
      console.error('Fejl ved lagring af data:', error); // Håndterer eventuelle fejl og udskriver dem til konsollen
    }
  };
  // Funktionen `getData` bruges til at hente data fra AsyncStorage baseret på den angivne nøgle (key)
  export const getData = async (key) => {
    try {
        // Forsøger at hente data fra AsyncStorage ved hjælp af den angivne nøgle
      const value = await AsyncStorage.getItem(key);
      // Hvis data blev fundet, konverteres det fra JSON-streng til et JavaScript-objekt
      if (value !== null) {
        const data = JSON.parse(value);
        console.log('Data blev hentet:', data); // Udskriver hentet data til konsollen for bekræftelse
        return data; // Returnerer de hentede data
      } else {
        console.log('Ingen data blev fundet.'); // Hvis ingen data blev fundet, udskrives en besked til konsollen
        return null; // Returnerer null som en angivelse af, at ingen data blev fundet
      }
    } catch (error) {
      console.error('Fejl ved hentning af data:', error); // Håndterer eventuelle fejl og udskriver dem til konsollen
    }
  };
  