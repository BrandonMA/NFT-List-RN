import { useInfiniteQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { NFTsListPage, NFTsListQueryParams } from 'models/nfts/NFTsListPage';
import pageSizeAtom from '../recoil/atoms/pageSizeAtom';
import currentCollectionAtom from '../recoil/atoms/currentCollectionAtom';

async function getNFTs(params: NFTsListQueryParams): Promise<NFTsListPage> {
    const urlParams = new URLSearchParams(params as unknown as Record<string, string>).toString();
    const response = await fetch(`https://ftx.us/api/nft/nfts_filtered?${urlParams}`, {
        method: 'GET'
    });

    return response.json();
}

export function useNFTs(page: number) {
    const collection = useRecoilValue(currentCollectionAtom);
    const size = useRecoilValue(pageSizeAtom);
    const filterObject = {
        collection: collection?.collectionDict?.name,
        nftAuctionFilter: 'all',
        minPriceFilter: null,
        maxPriceFilter: null,
        seriesFilter: [],
        traitsFilter: {},
        searchStringFilter: null,
        mintSourceFilter: null,
        include_not_for_sale: true
    };

    return useInfiniteQuery(
        ['collection_page', collection, size],
        ({ pageParam }) => {
            const pageIndex = (pageParam || 0) + 1;
            return getNFTs({
                startInclusive: pageIndex > 0 ? size * (pageIndex - 1) : 0,
                endExclusive: pageIndex > 0 ? size * pageIndex : size,
                sortFunc: 'offer_asc',
                nft_filter_string: JSON.stringify(filterObject)
            });
        },
        {
            getPreviousPageParam: () => (page === 0 ? undefined : page - 1),
            getNextPageParam: () => page + 1
        }
    );
}
