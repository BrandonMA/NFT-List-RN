import { SafeAreaLayer } from '@bma98/fractal-ui';
import React from 'react';
import { useRecoilValue } from 'recoil';
import currentCollectionAtom from '../../../recoil/atoms/currentCollectionAtom';
import NFTsFlatList from '../nfts/NFTsFlatList';
import { NFTCollectionDetails } from './NFTCollectionDetails';

export function NFTCollectionView() {
    const currentCollection = useRecoilValue(currentCollectionAtom);

    return (
        <SafeAreaLayer flex={1} width='100%' height='100%'>
            {currentCollection && <NFTsFlatList header={<NFTCollectionDetails collection={currentCollection} />} />}
        </SafeAreaLayer>
    );
}
