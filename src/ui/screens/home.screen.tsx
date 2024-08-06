import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import data from '../../mock/data';
import CardComponent from '../components/card.component';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  });

  return isLoading ? (
    <View style={styles.loader}>
      <ActivityIndicator
        color={'grey'}
        size={'large'}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Playlists</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardComponent {...item} />}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
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
    paddingVertical: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 32,
    marginStart: 20,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
