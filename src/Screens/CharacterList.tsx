import React, { useCallback, useEffect, useState } from 'react';
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { getCharacters } from '../Api/fetchPosts';
import PostsList from '../Components/PostsList';
import { Character, CharacterFilter } from '../utils/Interfaces';
import SearchInput from '../Components/SearchInput';

type CharacterListProps = {
    onCardPress: (item: Character) => void
}

const backgroundImage = require('../assets/images/background.jpg');

const CharacterList = ({ onCardPress }: CharacterListProps) => {
    const [posts, setPosts] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [postsCount, setPostsCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(page === 1);
        const filter: CharacterFilter = { name: query };
        (async () => {
            try {
                const result = await getCharacters(page, filter);
                if (result) {
                    setPosts((prevState) => ([...prevState, ...result.results!]));
                    setPostsCount(result.info?.count!);
                }
            } catch (error) {
                console.warn(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [page, query]);

    const filterCharacters = useCallback((inputText: string) => {
        if (inputText !== query) {
            setQuery(inputText);
            setPosts([]);
            setPage(1);
        }
    }, [query]);

    const nextPage = useCallback(() => {
        if (posts.length < postsCount && posts.length !== 0) {
            setPage(page + 1);
        }
    }, [page, posts.length, postsCount]);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    blurRadius={16}
                    source={backgroundImage}
                    resizeMode="cover">
                    <SearchInput onChangeText={filterCharacters} />
                    <PostsList
                        isLoading={isLoading}
                        onSelectItem={nextPage}
                        didSelectItem={onCardPress}
                        items={posts}
                    />
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 60,
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default CharacterList;
