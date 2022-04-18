import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  return (
    <View style={styles.view}>
      <FlatList
        data={route.params.colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={
          <Text style={styles.text}>{route.params.paletteName}</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
  },
});

export default ColorPalette;
