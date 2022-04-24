import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, FlatList, View } from 'react-native';

const PalettePreview = ({ palette, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.colourBox, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  colourBox: {
    alignContent: 'center',
    height: 40,
    width: 40,
    marginRight: 10,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default PalettePreview;
