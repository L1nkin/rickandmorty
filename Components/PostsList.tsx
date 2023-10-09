import { FlatList } from 'react-native';
import { Character } from '../utils/Interfaces';
import Post from './Post';
import { useCallback } from 'react';
import EmptyList from './EmptyList';
import React, { memo } from 'react';

interface Props {
    items: Character[];
    isLoading: boolean;

    onEndReached: () => void;
    didSelectItem: (id: Character) => void;
}

const PostsList = ({ items, onEndReached, didSelectItem, isLoading }: Props) => {
    const renderItem = useCallback(
        (item: Character) => (
            <Post
                id={item.id}
                name={item.name}
                image={item.image}
                didSelectItem={() => didSelectItem(item)}
            />
        ),
        [didSelectItem]
    );
    return (
        <FlatList
            onEndReached={onEndReached}
            onEndReachedThreshold={0.25}
            keyExtractor={item => item.id.toString()}
            data={items}
            renderItem={element => renderItem(element.item)}
            ListEmptyComponent={<EmptyList isLoading={isLoading} />}
        />
    );
};

export default memo(PostsList);
