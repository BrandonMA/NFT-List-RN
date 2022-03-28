import { useTheme } from '@bma98/fractal-ui';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useCallback } from 'react';

type BasicNavigationProps = {
    navigation: unknown;
};

export default function useFractalNativeStackNavigatorOptions<T extends BasicNavigationProps>(
    isRootScreen: boolean = false,
    options?: ({ navigation }: T) => NativeStackNavigationOptions
) {
    const { navigationBar } = useTheme();
    return useCallback(
        (props: T): NativeStackNavigationOptions => ({
            headerTintColor: navigationBar.textButton.color,
            headerStyle: {
                backgroundColor: navigationBar.backgroundColor
            },
            headerTitleStyle: {
                color: navigationBar.title.color
            },
            headerLargeTitle: isRootScreen,
            ...options?.(props)
        }),
        [navigationBar, isRootScreen, options]
    );
}
