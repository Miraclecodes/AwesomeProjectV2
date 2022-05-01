import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const ColorPicker = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.color.colorName}</Text>
      </View>
      <View style={styles.switch}>
        <Switch
          value={
            !!props.selectedColors.find(
              (color) => color.colorName === props.color.colorName,
            )
          }
          onValueChange={(newValue) => props.update(props.color, newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
  },
  textContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  switch: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ColorPicker;
