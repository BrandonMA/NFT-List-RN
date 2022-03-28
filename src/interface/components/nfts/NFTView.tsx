import React from 'react';
import { useRecoilValue } from 'recoil';
import FastImage from 'react-native-fast-image';
import currentNFTAtom from '../../../recoil/atoms/currentNFTAtom';

const imageStyles = { width: '100%', height: '100%' };

export default function NFTView() {
    const currentNFT = useRecoilValue(currentNFTAtom);
    return currentNFT?.imageUrl ? (
        <FastImage
            style={imageStyles}
            source={{
                uri: currentNFT.imageUrl
            }}
            resizeMode={FastImage.resizeMode.contain}
        />
    ) : null;
}
