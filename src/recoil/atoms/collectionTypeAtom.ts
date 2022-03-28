import { atom } from 'recoil';
import { NFTCollectionType } from 'models/nfts/NFTCollectionPage';

const collectionTypeAtom = atom<NFTCollectionType>({
    key: 'collectionTypeAtom',
    default: 'all'
});

export default collectionTypeAtom;
