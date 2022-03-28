import { useInfiniteQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import pageSizeAtom from '../recoil/atoms/pageSizeAtom';
import collectionTypeAtom from '../recoil/atoms/collectionTypeAtom';
import { NFTCollectionPageQueryParams, NFTCollectionPage } from '../models/nfts/NFTCollectionPage';

async function getNFTCollectionPage(params: NFTCollectionPageQueryParams): Promise<NFTCollectionPage> {
    const urlParams = new URLSearchParams(params as unknown as Record<string, string>).toString();
    const response = await fetch(`https://ftx.us/api/nft/collections_page?${urlParams}`, {
        method: 'GET'
    });

    return response.json();
}

export function useNFTCollectionPage(page: number) {
    const size = useRecoilValue(pageSizeAtom);
    const collectionType = useRecoilValue(collectionTypeAtom);
    return useInfiniteQuery(
        ['collection_page', collectionType, size],
        ({ pageParam }) => {
            const pageIndex = (pageParam || 0) + 1;
            return getNFTCollectionPage({
                startInclusive: pageIndex > 0 ? size * (pageIndex - 1) : 0,
                endExclusive: pageIndex > 0 ? size * pageIndex : size,
                collectionType
            });
        },
        {
            getPreviousPageParam: () => (page === 0 ? undefined : page - 1),
            getNextPageParam: () => page + 1
        }
    );
}
