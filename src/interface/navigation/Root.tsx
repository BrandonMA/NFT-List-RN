import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableFreeze } from 'react-native-screens';
import HomeStack from './HomeStack';

enableFreeze(true);

export default function Root() {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    );
}
