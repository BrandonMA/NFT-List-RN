import React from 'react';
import { Background } from '@bma98/fractal-ui';
import { NFTCollectionView } from '../../../components/nftCollections/NFCollectionView';

export default function NFTCollectionScreen() {
    return (
        <Background justifyContent='center' alignItems='center'>
            <NFTCollectionView />
        </Background>
    );
}
