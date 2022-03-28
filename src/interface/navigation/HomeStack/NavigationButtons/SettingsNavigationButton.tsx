import React from 'react';
import { TouchableOpacity, useTheme } from '@bma98/fractal-ui';
import { Feather } from '@expo/vector-icons';

type SettingsNavigationButtonProps = {
    onPress: () => void;
};

export default function SettingsNavigationButton({ onPress }: SettingsNavigationButtonProps) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity onPress={onPress} height={24} width={24}>
            <Feather name='settings' size={24} color={colors.mainInteractiveColor} />
        </TouchableOpacity>
    );
}
