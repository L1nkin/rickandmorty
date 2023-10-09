import { StyleSheet, Text } from 'react-native';
import React from 'react';

const EmptyList = () => {

    return (
        <Text style={styles.text}> Characters not found </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});

export default EmptyList;
