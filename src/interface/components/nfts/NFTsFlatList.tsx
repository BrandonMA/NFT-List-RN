import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { LoadingBackground } from '@bma98/fractal-ui';
import { InfiniteData } from 'react-query';
import { NFTsListPage } from 'models/nfts/NFTsListPage';
import NFT from 'models/nfts/NFT';
import { useNFTs } from '../../../hooks/useNFTs';
import NFTCell from './NFTCell';

// * MARK: Utility functions

// TODO: Add tests for this
function reduceInfiniteDataToArray(data: InfiniteData<NFTsListPage> | undefined) {
    if (data != null) {
        return data?.pages.map((page) => page.result.nfts).reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
    }
    return [];
}

type NFTsFlatListProps = {
    header: JSX.Element;
};

export default function NFTsFlatList({ header }: NFTsFlatListProps) {
    const [page, setPage] = useState(0);
    const { data, status, fetchNextPage } = useNFTs(page);
    const [nfts, setNfts] = useState<NFT[]>([]);

    const fetchMoreData = useCallback(() => {
        setPage((page) => page + 1);
        fetchNextPage();
    }, [fetchNextPage]);

    const renderItem = useCallback(({ item }) => <NFTCell key={item.id} nft={item} />, []);

    useEffect(() => {
        setNfts(reduceInfiniteDataToArray(data));
    }, [data]);

    return status === 'loading' ? (
        <LoadingBackground />
    ) : (
        <FlatList ListHeaderComponent={header} data={nfts} removeClippedSubviews renderItem={renderItem} onEndReached={fetchMoreData} />
    );
}
