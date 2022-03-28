import React from 'react';
import { Box, Layer, Pressable, Text, useTheme } from '@bma98/fractal-ui';
import { NFTCollection } from 'models/nfts/NFTCollectionPage';
import FastImage from 'react-native-fast-image';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationProp } from 'interface/navigation/HomeStack/types';
import { useSetRecoilState } from 'recoil';
import currentCollectionAtom from '../../../recoil/atoms/currentCollectionAtom';

type NFTCollectionCellProps = {
    collection: NFTCollection;
};

const tapStyle = { scale: 0.9, opacity: 0.5 };

export function NFTCollectionCell({ collection }: NFTCollectionCellProps) {
    const { colors, spacings } = useTheme();
    const { width } = Dimensions.get('window');
    const halfWidth = width / 2;
    const widthWithMargin = halfWidth - spacings.lg;
    const boxHeight = halfWidth + spacings.m + 52 + spacings.m;
    const navigation = useNavigation<HomeStackNavigationProp>();
    const setCurrentCollection = useSetRecoilState(currentCollectionAtom);

    return (
        <Pressable
            width='100%'
            height='100%'
            alignItems='center'
            justifyContent='flex-start'
            whileTap={tapStyle}
            onPress={() => {
                setCurrentCollection(collection);
                navigation.navigate('NFTCollectionScreen');
            }}
        >
            <Box padding={0} width={widthWithMargin} height={boxHeight} overflow='hidden' position='relative'>
                {collection.first_nft.imageUrl && (
                    <FastImage
                        style={{ width: '100%', height: widthWithMargin }}
                        source={{
                            uri: collection.first_nft.imageUrl
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                )}
                <Layer position='absolute' top={0} right={0} backgroundColor={colors.mainInteractiveColor} borderBottomLeftRadius={8}>
                    <Text textOverflow='ellipsis' numberOfLines={1} fontSize={13} color={colors.white} margin={spacings.xs}>
                        {collection.first_nft.offerPrice
                            ? `${collection.first_nft.offerPrice} ${collection.first_nft.quoteCurrency}`
                            : 'Unknown Price'}
                    </Text>
                </Layer>
                <Layer marginTop={spacings.m} marginRight={spacings.m} marginLeft={spacings.m} flex={1}>
                    <Text textOverflow='ellipsis' numberOfLines={1} fontSize={13} color={colors.label} marginBottom={spacings.s}>
                        {collection.issuer?.issuer}
                    </Text>
                    <Text textOverflow='ellipsis' numberOfLines={1} marginBottom={spacings.s}>
                        {collection.collectionDict?.name}
                    </Text>
                    <Text textOverflow='ellipsis' numberOfLines={1} fontSize={13} color={colors.alternativeInteractiveColor}>
                        {`${collection.total} items`}
                    </Text>
                </Layer>
            </Box>
        </Pressable>
    );
}
