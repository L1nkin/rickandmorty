import { CharacterListScreenStackProps } from '../../App';
import React, { useCallback } from 'react';
import CharacterList from './CharacterList';
import { Character } from '../utils/Interfaces';

export const CharacterListScreen: React.FC<CharacterListScreenStackProps> = ({ navigation }) => {
    const navigateToDetails = useCallback(
        (item: Character) => {
            navigation.navigate('CharacterDetails', { item: item });
        },
        [navigation],
    );

    return (
        <CharacterList onCardPress={navigateToDetails} />
    );
};