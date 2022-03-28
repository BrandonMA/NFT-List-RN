import { NavigationProp } from '@react-navigation/native';

export type HomeStackParamList = {
    HomeScreen: undefined;
    SettingsScreen: undefined;
    NFTCollectionScreen: undefined;
    NFTScreen: undefined;
};

export type HomeStackNavigationProp = NavigationProp<HomeStackParamList>;
export type HomeStackNavigationProps = {
    navigation: HomeStackNavigationProp;
};
