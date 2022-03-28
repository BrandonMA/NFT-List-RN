import { SafeAreaLayer } from '@bma98/fractal-ui';
import React from 'react';
import NFTCollectionPagesList from './NFTCollectionPagesList';
import { NFTCollectionTypeSegmentedControl } from './NFTCollectionTypeSegmentedControl';

export function NFTCollectionPagesView() {
    return (
        <SafeAreaLayer flex={1} width='100%' height='100%'>
            <NFTCollectionTypeSegmentedControl />
            <NFTCollectionPagesList />
        </SafeAreaLayer>
    );
}
