import { Box, colors, HorizontalLayer, Layer, Text, useTheme } from '@bma98/fractal-ui';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { NFTCollection } from 'models/nfts/NFTCollectionPage';

type NFTCollectionDetailsProps = {
    collection: NFTCollection;
};

const imageStyles = { width: 128, height: 128, borderRadius: 64 };

export function NFTCollectionDetails({ collection }: NFTCollectionDetailsProps) {
    const { textVariants, spacings } = useTheme();
    return (
        <Box width='100%' padding={0} borderRadius={0} marginBottom={spacings.m}>
            {collection.collectionDict?.bannerImageUrl && (
                <FastImage
                    style={{ width: '100%', height: 200 }}
                    source={{
                        uri: collection.collectionDict.bannerImageUrl
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            )}
            <HorizontalLayer margin={spacings.s} alignItems='center'>
                {collection.collectionDict?.avatarImageUrl && (
                    <FastImage
                        style={imageStyles}
                        source={{
                            uri: collection.collectionDict.avatarImageUrl
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                )}
                <Layer flex={1} marginLeft={spacings.s}>
                    <Text
                        fontSize={textVariants.title.fontSize}
                        marginBottom={spacings.m}
                        fontWeight={textVariants.title.fontWeight}
                        numberOfLines={0}
                    >
                        {collection.collectionDict?.name}
                    </Text>
                    <Text fontSize={15} color={colors.label} numberOfLines={0} marginBottom={2}>
                        {collection.issuer?.issuer}
                    </Text>
                    <Text fontSize={15} color={colors.label} numberOfLines={0} marginBottom={2}>
                        {`${collection.total} items`}
                    </Text>
                    <Text fontSize={15} color={colors.label} numberOfLines={0} marginBottom={2}>
                        {`$${collection.volume.toLocaleString()}`}
                    </Text>
                </Layer>
            </HorizontalLayer>
        </Box>
    );
}
