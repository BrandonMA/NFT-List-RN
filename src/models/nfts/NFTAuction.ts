type NFTAuction = {
    bestBid: number | null;
    minNextBid: number;
    endTime: string;
    bids: number;
    quoteCurrency: string;
};

export default NFTAuction;
