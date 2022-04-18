import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';
import { COLOR_PALETTES } from '../globals';

const Home = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
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
