import { FlatList, StyleSheet, Text } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import React, { memo } from 'react';

interface Props {
    isLoading: boolean
}

const EmptyList = ({ isLoading }: Props) => {

    return isLoading ? (
        <FlatList
            data={Array(5)}
            renderItem={
                () => {
                    return (<SkeletonPlaceholder>
                        < SkeletonPlaceholder.Item height={104} margin={4} borderRadius={16} borderWidth={2} borderColor={'#fff'} />
                    </SkeletonPlaceholder >
                    )
                }} />
    ) : (<Text style={styles.text}> Characters not found </Text>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
})

export default memo(EmptyList)