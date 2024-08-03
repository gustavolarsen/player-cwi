import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CardComponent = ({ id, title, imageUrl, quantity, duration }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {quantity} vídeos - {duration}
        </Text>
      </View>
      <View></View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    marginVertical: 16,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    color: '#a0a0a0',
    fontSize: 12,
  },
});
