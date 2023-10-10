import React from 'react';
import { ComponentProps } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type Props = ComponentProps<typeof SkeletonPlaceholder> & {
    style?: StyleProp<ViewStyle>;
};

export const SkeletonTemplate = ({ children, ...rest }: Props) => {
    return (
        <SkeletonPlaceholder
            speed={1500}
            borderRadius={6}
            highlightColor="rgba(0,0,0,0.5)"
            {...rest}>
            {children}
        </SkeletonPlaceholder>
    );
};

export const SkeletonItem = SkeletonPlaceholder.Item;
