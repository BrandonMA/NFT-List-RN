import React, { useCallback } from 'react';
import { SegmentedControl } from '@bma98/fractal-ui';
import { useSetRecoilState } from 'recoil';
import { NFTCollectionType } from 'models/nfts/NFTCollectionPage';
import collectionTypeAtom from '../../../recoil/atoms/collectionTypeAtom';

const segmentedControlValues: NFTCollectionType[] = ['all', 'ftx', 'sol', 'eth'];

export function NFTCollectionTypeSegmentedControl() {
    const setCollectionTypeAtom = useSetRecoilState(collectionTypeAtom);
    const handleChange = useCallback(
        (value) => {
            setCollectionTypeAtom(value as NFTCollectionType);
        },
        [setCollectionTypeAtom]
    );

    return <SegmentedControl values={segmentedControlValues} margin={8} marginTop={16} onChange={handleChange} />;
}
