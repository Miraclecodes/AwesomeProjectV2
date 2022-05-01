import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ColorPicker from '../components/colorPicker';
import { COLORS } from '../globals';

const AddNewPaletteModal = ({ navigation, route }) => {
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleUpdateColors = useCallback((color, newValue) => {
    if (newValue === true) {
      setSelectedColors((current) => [...current, color]);
    } else {
      setSelectedColors((current) =>
        current.filter((c) => c.colorName !== color.colorName),
      );
    }
  }, []);

  const handleSubmit = useCallback(() => {
    navigation.navigate('Home', {
      newPalette: {
        id: route.params.numberOfPalettes,
        paletteName: paletteName,
        colors: selectedColors,
      },
    });
  }, [navigation, paletteName, route.params.numberOfPalettes, selectedColors]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit!</Text>
        </View>
      </TouchableOpacity>
      <Text>Enter Palette Name</Text>
      <TextInput
        style={styles.input}
        value={paletteName}
        onChangeText={setPaletteName}
        placeholder={'Palette Name'}
      />
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorPicker
            color={item}
            update={handleUpdateColors}
            selectedColors={selectedColors}
          />
        )}
      />
      <Button style={styles.button} onPress={handleSubmit} title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 15,
  },
  container: {
    alignContent: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

export default AddNewPaletteModal;
