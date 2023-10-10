import { FlatList } from 'react-native';
import React from 'react';
import { SkeletonItem, SkeletonTemplate } from './SkeletonWrapper';

const Skeleton = () => {
    return (
        <FlatList
            data={Array(5)}
            renderItem={
                () => {
                    return (<SkeletonTemplate>
                        < SkeletonItem height={104} margin={4} borderRadius={16} borderWidth={2} borderColor={'#fff'} />
                    </SkeletonTemplate >
                    );
                }} />
    );
};

export default Skeleton;
