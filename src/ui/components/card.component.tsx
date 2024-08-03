import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import NextIcon from '../../assets/icons/next.svg';

const CardComponent = ({ id, title, imageUrl, quantity, duration }) => {
  return (
    <View style={styles.container}>
      <View style={styles.datails}>
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
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('cliquei')}
      >
        <NextIcon
          height={18}
          width={18}
        />
      </TouchableOpacity>
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
    marginVertical: 16,
  },
  datails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 90,
    borderRadius: 8,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    color: '#a0a0a0',
    fontSize: 12,
  },
  button: {
    height: '100%',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
