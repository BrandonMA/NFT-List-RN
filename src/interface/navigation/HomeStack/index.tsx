import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home.screen';
import SettingsScreen from './Screens/Settings.screen';
import SettingsNavigationButton from './NavigationButtons/SettingsNavigationButton';
import NFTCollectionScreen from './Screens/NFTCollection.screen';
import { HomeStackParamList, HomeStackNavigationProps } from './types';
import useFractalNativeStackNavigatorOptions from '../useFractalNativeStackNavigatorOptions';
import NFTScreen from './Screens/NFT.screen';

const NativeStack = createNativeStackNavigator<HomeStackParamList>();

const homeHeaderOptions = ({ navigation }: HomeStackNavigationProps) => ({
    title: 'Collections',
    headerRight: () => <SettingsNavigationButton onPress={() => navigation.navigate('SettingsScreen')} />
});

const settingsHeaderOptions = () => ({
    title: 'Settings'
});

const nftCollectionHeaderOptions = () => ({
    title: 'Collection Details'
});

const nftHeaderOptions = () => ({
    title: 'NFT'
});

export default function HomeStack() {
    const homeOptions = useFractalNativeStackNavigatorOptions(true, homeHeaderOptions);
    const settingsOptions = useFractalNativeStackNavigatorOptions(true, settingsHeaderOptions);
    const nftCollectionOptions = useFractalNativeStackNavigatorOptions(false, nftCollectionHeaderOptions);
    const nftOptions = useFractalNativeStackNavigatorOptions(false, nftHeaderOptions);

    return (
        <NativeStack.Navigator>
            <NativeStack.Screen name='HomeScreen' component={HomeScreen} options={homeOptions} />
            <NativeStack.Screen name='SettingsScreen' component={SettingsScreen} options={settingsOptions} />
            <NativeStack.Screen name='NFTCollectionScreen' component={NFTCollectionScreen} options={nftCollectionOptions} />
            <NativeStack.Screen name='NFTScreen' component={NFTScreen} options={nftOptions} />
        </NativeStack.Navigator>
    );
}
