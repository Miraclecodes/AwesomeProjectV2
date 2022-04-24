import React, { useState, useCallback, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalletes, setColorPalettes] = useState([]);

  const handleFetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    const palettes = await result.json();
    if (result.ok) {
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchColorPalettes();
  }, [handleFetchColorPalettes]);

  return (
    <FlatList
      style={styles.container}
      data={colorPalletes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PalettePreview
          palette={item}
          onPress={() => navigation.navigate('ColorPalette', item)}
        />
      )}
      ListHeaderComponent={<Text style={styles.text}>Color Palettes</Text>}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  container: {
    marginLeft: 15,
  },
});

export default Home;
