import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { memo } from 'react';

interface Props {
    id: number
    name: string,
    image: string

    didSelectItem: (id: number) => void
}

const Post = ({ id, name, image, didSelectItem }: Props) => {
    return (
        <TouchableHighlight
            activeOpacity={0.7}
            underlayColor={'#fff'}
            style={styles.container}
            onPress={() => didSelectItem(id)}>
            <View style={styles.content}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.nameViewContainer}>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#fff',
        margin: 4,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    image: {
        height: 100,
        width: '30%',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },
    text: {
        fontSize: 22,
        padding: 10,
        fontWeight: 'bold',
    },
    nameViewContainer: {
        flex: 1,
    },
});

export default memo(Post);
