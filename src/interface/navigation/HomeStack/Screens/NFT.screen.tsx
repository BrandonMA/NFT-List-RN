import React from 'react';
import { Background } from '@bma98/fractal-ui';
import NFTView from '../../../components/nfts/NFTView';

export default function NFTScreen() {
    return (
        <Background justifyContent='center' alignItems='center'>
            <NFTView />
        </Background>
    );
}
