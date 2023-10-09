import { FlatList } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React from 'react';

const Skeleton = () => {
    return (
        <FlatList
            data={Array(5)}
            renderItem={
                () => {
                    return (<SkeletonPlaceholder>
                        < SkeletonPlaceholder.Item height={104} margin={4} borderRadius={16} borderWidth={2} borderColor={'#fff'} />
                    </SkeletonPlaceholder >
                    );
                }} />
    );
};

export default Skeleton;
