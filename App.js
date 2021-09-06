import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Views/Home';
const Stack = createNativeStackNavigator();

export const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={Home} 
         options={{
          
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerShown: true,
          headerShadowVisible: false,
          // headerLeft: () => (
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title=""
          //     // ImageBackground = {MediaSource('./src/Image/BurgerButtonImage.png')}
          //   >
                
          //     </Button>
          // ),
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;