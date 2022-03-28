import NFT from './NFT';

export type NFTsListPage = {
    success: boolean;
    result: {
        total: number;
        count: number;
        nfts: NFT[];
    };
};

export type NFTsListQueryParams = {
    startInclusive: number;
    endExclusive: number;
    nft_filter_string: string;
    sortFunc: 'offer_asc';
};
