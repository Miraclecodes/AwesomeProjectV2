import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
  const colourStyle = {
    backgroundColor: props.hexCode,
  };

  const textStyle = {
    color:
      parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, colourStyle]}>
      <Text style={[styles.boxText, textStyle]}>
        {props.colorName} {props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  boxText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default ColorBox;
