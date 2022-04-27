import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ColorPicker from '../components/colorPicker';
import { COLORS } from '../globals';

const AddNewPaletteModal = () => {
  const [paletteName, setPaletteName] = useState('');

  return (
    <View style={styles.container}>
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
        renderItem={({ item }) => <ColorPicker colorName={item.colorName} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  container: {
    alignContent: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default AddNewPaletteModal;
