import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = {
    onChangeText: (text: string) => void
}

const SearchInput = (props: Props) => {
    return (
        <TextInput style={styles.input} placeholder="Найти персонажа ..." {...props} />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        height: 50,
        borderRadius: 12,
        fontSize: 18,
        padding: 6,
        margin: 4,
        borderWidth: 1,
        borderColor: '#fff',
    },
});

export default React.memo(SearchInput);
