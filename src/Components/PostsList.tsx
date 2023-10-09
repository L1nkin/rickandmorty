import { FlatList, ListRenderItemInfo } from 'react-native';
import { Character } from '../utils/Interfaces';
import Post from './Post';
import { useCallback } from 'react';
import EmptyList from './EmptyList';
import React, { memo } from 'react';
import Skeleton from './Skeleton';

interface Props {
    items: Character[];
    isLoading: boolean;

    onSelectItem: () => void;
    didSelectItem: (id: Character) => void;
}

const PostsList = ({ items, onSelectItem, didSelectItem, isLoading }: Props) => {
    const renderItem = useCallback(
        (element: ListRenderItemInfo<Character>) => (
            <Post
                id={element.item.id}
                name={element.item.name}
                image={element.item.image}
                didSelectItem={() => didSelectItem(element.item)}
            />
        ),
        [didSelectItem]
    );

    const configKeyExtractor = (item: Character) => {
        return item.id.toString()
    }

    if (isLoading) {
        return <Skeleton />;
    } else {
        return (
            <FlatList
                onEndReached={onSelectItem}
                onEndReachedThreshold={0.25}
                keyExtractor={configKeyExtractor}
                data={items}
                renderItem={renderItem}
                ListEmptyComponent={EmptyList}
            />
        );
    }
};

export default memo(PostsList);
