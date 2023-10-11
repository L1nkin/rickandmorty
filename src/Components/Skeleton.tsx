import React from 'react';
import { SkeletonItem, SkeletonTemplate } from './SkeletonWrapper';
import { View } from 'react-native';

const Skeleton = () => {
    const array = Array.from(Array(10).keys());

    return (
        <View style={{ flex: 1 }}>
            {
                array.map((element) => {
                    return (
                        <SkeletonTemplate key={element}>
                            < SkeletonItem height={104} margin={4} borderRadius={16} borderWidth={2} borderColor={'#fff'} />
                        </SkeletonTemplate >
                    );
                })
            }
        </View>
    );
};

export default Skeleton;
