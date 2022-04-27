import React, { useState, useCallback, useEffect } from 'react';
import { Text, StyleSheet, RefreshControl } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
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

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    console.log('hello');
    console.log(isRefreshing);
    await handleFetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [handleFetchColorPalettes, isRefreshing]);

  return (
    <>
      <TouchableOpacity
        style={styles.modalButton}
        onPress={() => navigation.navigate('AddNewPalette')}
      >
        <Text style={styles.buttonText}>Add a color palette</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              handleRefresh;
            }}
          />
        }
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
    </>
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
  modalButton: {
    height: 50,
    backgroundColor: '#8BD2EC',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Home;
