import NFTAuction from './NFTAuction';

type NFT = {
    id: string;
    name: string;
    description: string | null;
    issuer: string;
    collection: string;
    series: string;
    solMintAddress: string | null;
    ethContractAddress: string | null;
    imageUrl: string | null;
    videoUrl: string | null;
    animationUrl: string | null;
    thumbnailUrl: string | null;
    attributes: Record<string, string> | null;
    redeemable: boolean;
    redeemed: boolean;
    offerPrice: number | null;
    auction: NFTAuction | null;
    depositMethods?: string[];
    withdrawalMethods?: string[];
    auctionReservationPrice?: number;
    owned?: boolean;
    bid?: number | null;
    buyFee?: number | null;
    isBestBid?: boolean;
    quoteCurrency: string;
    featured?: boolean;
    created_at?: string;
    hidden?: boolean | undefined;
};

export default NFT;
