import { NFTCollection } from 'models/nfts/NFTCollectionPage';
import { atom } from 'recoil';

const currentCollectionAtom = atom<NFTCollection | undefined>({
    key: 'currentCollectionAtom',
    default: undefined
});

export default currentCollectionAtom;
