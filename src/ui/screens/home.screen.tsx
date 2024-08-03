import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import data from '../../mock/data';
import CardComponent from '../components/card.component';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playlists</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardComponent {...item} />}
        keyExtractor={item => {
          String(item.id);
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#414141',
    marginTop: 20,
    padding: 30,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});
