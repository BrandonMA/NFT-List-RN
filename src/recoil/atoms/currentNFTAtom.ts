import NFT from 'models/nfts/NFT';
import { atom } from 'recoil';

const currentNFTAtom = atom<NFT | undefined>({
    key: 'currentNFTAtom',
    default: undefined
});

export default currentNFTAtom;
