import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import HomeScreen from './src/scenes/Home';
import MaskedViewScreen from './src/scenes/MaskedView';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="MaskedView"
          component={MaskedViewScreen}
          options={({navigation}) => ({
            // Usage of custom 'headerLeft' breaks the app if MaskedView is rendered on the screen
            headerLeft: () => (
              <Button onPress={() => navigation.goBack()} title="Back" />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
