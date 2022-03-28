import React, { useCallback } from 'react';
import { Background, Box, PaddingLayer, Picker, SafeAreaLayer, Text, useTheme } from '@bma98/fractal-ui';
import { useRecoilState } from 'recoil';
import pageSizeAtom from '../../../../recoil/atoms/pageSizeAtom';

const items: [string, string][] = [
    ['25', '25'],
    ['50', '50'],
    ['75', '75']
];

export default function SettingsScreen() {
    const { spacings } = useTheme();
    const [collectionPageSize, setCollectionPageSize] = useRecoilState(pageSizeAtom);

    const handleChange = useCallback(
        ([key]) => {
            setCollectionPageSize(Number(key));
        },
        [setCollectionPageSize]
    );

    return (
        <Background>
            <SafeAreaLayer>
                <PaddingLayer width='100%'>
                    <Box width='100%'>
                        <Text marginBottom={spacings.s}>Page Size:</Text>
                        <Picker value={String(collectionPageSize)} onChange={handleChange} items={items} />
                    </Box>
                </PaddingLayer>
            </SafeAreaLayer>
        </Background>
    );
}
