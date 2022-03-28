import NFT from './NFT';
import NFTCollectionDict from './NFTCollectionDict';
import NFTIssuer from './NFTIssuer';

export type NFTCollectionType = 'all' | 'ftx' | 'sol' | 'eth';

export type NFTCollectionPageQueryParams = {
    startInclusive: number;
    endExclusive: number;
    collectionType: NFTCollectionType;
};

export type NFTCollection = {
    group_type: string;
    group_id: string;
    total: number;
    volume: number;
    first_nft: NFT;
    issuer?: NFTIssuer;
    collectionDict?: NFTCollectionDict;
};

export function isNFTCollection(value: unknown): value is NFTCollection {
    const castedValue = value as NFTCollection;
    return castedValue.group_type != null && castedValue.group_id != null && castedValue.total != null;
}

export type NFTCollectionPage = {
    result: {
        count: number;
        collections: NFTCollection[];
    };
};
