import { atom } from 'recoil';

const pageSizeAtom = atom({
    key: 'pageSizeAtom',
    default: 25
});

export default pageSizeAtom;
