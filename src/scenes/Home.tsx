import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Navigate to masked view screen"
        onPress={() => navigation.navigate('MaskedView')}
      />
    </View>
  );
}

export default HomeScreen;
