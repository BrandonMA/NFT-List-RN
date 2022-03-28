import { ActivityIndicator, AutoSizeRecyclerView, DataProvider, LayoutProvider, LoadingBackground, useTheme } from '@bma98/fractal-ui';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { InfiniteData } from 'react-query';
import { NFTCollection, NFTCollectionPage } from 'models/nfts/NFTCollectionPage';
import { Dimensions } from 'react-native';
import { useNFTCollectionPage } from '../../../hooks/useNFTCollectionPage';
import { NFTCollectionCell } from './NFTCollectionCell';

// * MARK: Utility functions

// TODO: Add tests for this
function reduceInfiniteDataToArray(data: InfiniteData<NFTCollectionPage> | undefined) {
    if (data != null) {
        return data?.pages
            .map((page) => page.result.collections)
            .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
    }
    return [];
}

// * MARK: Table layout

enum NFTCollectionPageCellType {
    normal,
    footer
}

function rowRenderer(type: string | number, collection: NFTCollection) {
    if (type === NFTCollectionPageCellType.footer) {
        return <ActivityIndicator color='primary' />;
    }
    return <NFTCollectionCell key={collection.group_id} collection={collection} />;
}

const scrollViewProps = {
    contentInsetAdjustmentBehavior: 'automatic'
};

// * MARK: Component

export default function NFTCollectionPagesList() {
    const [page, setPage] = useState(0);
    const { spacings } = useTheme();
    const { data, status, fetchNextPage } = useNFTCollectionPage(page);
    const [dataProvider, setDataProvider] = useState(
        new DataProvider((rowOne: NFTCollection, rowTwo: NFTCollection) => rowOne.group_id !== rowTwo.group_id)
    );

    const fetchMoreData = useCallback(() => {
        setPage((page) => page + 1);
        fetchNextPage();
    }, [fetchNextPage]);

    const getLayoutType = useCallback(
        (index: number) => {
            if (index === dataProvider.getSize() - 1) {
                return NFTCollectionPageCellType.footer;
            }
            return NFTCollectionPageCellType.normal;
        },
        [dataProvider]
    );

    const layoutProvider = useMemo(() => {
        const { width } = Dimensions.get('window');
        const halfWidth = width / 2;
        return new LayoutProvider(getLayoutType, (type, dim) => {
            if (type === NFTCollectionPageCellType.footer) {
                dim.height = 48;
                dim.width = width;
            } else {
                dim.height = halfWidth + spacings.m + 52 + spacings.m + spacings.m;
                dim.width = halfWidth;
            }
        });
    }, [getLayoutType, spacings]);

    useEffect(() => {
        setDataProvider((dataProvider) => dataProvider.cloneWithRows([...reduceInfiniteDataToArray(data), 'FOOTER']));
    }, [data]);

    return status === 'loading' ? (
        <LoadingBackground />
    ) : (
        <AutoSizeRecyclerView
            layoutProvider={layoutProvider}
            dataProvider={dataProvider}
            rowRenderer={rowRenderer}
            onEndReached={fetchMoreData}
            scrollViewProps={scrollViewProps}
        />
    );
}
