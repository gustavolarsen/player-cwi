import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.videoImage}
        source={{
          uri: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <Text>PlayerScreen</Text>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  videoImage: {
    width: width,
    height: height * 0.4,
  },
});
