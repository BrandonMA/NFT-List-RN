import React from 'react';
import { Background } from '@bma98/fractal-ui';
import { NFTCollectionPagesView } from '../../../components/nftCollections/NFTCollectionPagesView';

export default function HomeScreen() {
    return (
        <Background justifyContent='center' alignItems='center'>
            <NFTCollectionPagesView />
        </Background>
    );
}
