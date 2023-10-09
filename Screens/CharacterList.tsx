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

const CharacterList = ({ navigation }: any) => {
    const [posts, setPosts] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [postsCount, setPostsCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const filter: CharacterFilter = { name: query };
        (async () => {
            try {
                const result = await getCharacters(page, filter);
                if (result) {
                    setPosts([...posts, ...result.results!]);
                    setPostsCount(result.info?.count!);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
                console.log(posts);
            }
        })();
    }, [page, query]);

    const filterCharacters = useCallback((inputText: string) => {
        setQuery(inputText);
        setPosts([]);
        setPage(1);
    }, []);

    const nextPage = useCallback(() => {
        if (posts.length < postsCount && posts.length !== 0) {
            setPage(page + 1);
        }
    }, [page, posts.length, postsCount]);

    const didSelectItem = useCallback(
        (item: Character) => {
            navigation.navigate('CharacterDetailInfo', { item: item });
        },
        [navigation],
    );

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    blurRadius={16}
                    source={require('../assets/images/background.jpg')}
                    resizeMode="cover">
                    <SearchInput handleSearchText={filterCharacters} />
                    <PostsList
                        isLoading={isLoading}
                        onEndReached={nextPage}
                        didSelectItem={didSelectItem}
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
