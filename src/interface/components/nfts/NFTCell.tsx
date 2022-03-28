import { Box, Button, Layer, PaddingLayer, Text, useTheme } from '@bma98/fractal-ui';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationProp } from 'interface/navigation/HomeStack/types';
import NFT from 'models/nfts/NFT';
import React, { memo } from 'react';
import { Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSetRecoilState } from 'recoil';
import currentNFTAtom from '../../../recoil/atoms/currentNFTAtom';

type NFTCellProps = {
    nft: NFT;
};

function NFTCell({ nft }: NFTCellProps) {
    const { spacings } = useTheme();
    const { width } = Dimensions.get('window');
    const setCurrentNFT = useSetRecoilState(currentNFTAtom);
    const navigation = useNavigation<HomeStackNavigationProp>();
    const imageHeight = width - spacings.m * 2;
    const isAvailable = nft.offerPrice != null;

    return (
        <Layer width='100%' height={imageHeight + spacings.m + 148 + spacings.m} marginBottom={spacings.m}>
            <Box marginLeft={spacings.m} marginRight={spacings.m} padding={0} flex={1} overflow='hidden'>
                {nft.imageUrl && (
                    <FastImage
                        style={{ width: '100%', height: imageHeight }}
                        source={{
                            uri: nft.imageUrl
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                )}
                <PaddingLayer>
                    <Text marginBottom={spacings.m}>{nft.name}</Text>
                    <Button
                        marginBottom={spacings.m}
                        disabled={!isAvailable}
                        text={isAvailable ? `Buy for ${nft.offerPrice} ${nft.quoteCurrency}` : 'Not available'}
                    />
                    <Button
                        variant='alternative'
                        text='Preview'
                        onPress={() => {
                            setCurrentNFT(nft);
                            navigation.navigate('NFTScreen');
                        }}
                    />
                </PaddingLayer>
            </Box>
        </Layer>
    );
}

const MemoNFTCell = memo(NFTCell);
export default MemoNFTCell;
