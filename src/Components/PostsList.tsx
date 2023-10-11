import { FlatList, ListRenderItemInfo } from 'react-native';
import { Character } from '../utils/Interfaces';
import Post from './Post';
import { useCallback } from 'react';
import EmptyList from './EmptyList';
import React, { memo } from 'react';
import Skeleton from './Skeleton';

type Props = {
    items: Character[];
    isLoading: boolean;

    onSelectItem: () => void;
    didSelectItem: (id: Character) => void;
}

const keyExtractor = (data: Character) => data.id.toString();


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

    if (isLoading) {
        return <Skeleton />;
    }
    return (
        <FlatList
            onEndReached={onSelectItem}
            onEndReachedThreshold={0.25}
            keyExtractor={keyExtractor}
            data={items}
            renderItem={renderItem}
            ListEmptyComponent={EmptyList}
        />
    );
};

export default memo(PostsList);
