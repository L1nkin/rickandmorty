import { CharacterDetailsScreenStackProps, CharacterListScreenStackProps } from "../../App";
import CharacterDetails from "./CharacterDetails";
import React, { useCallback } from 'react';
import CharacterList from "./CharacterList";
import { Character } from "../utils/Interfaces";

export const CharacterDetailsScreen: React.FC<CharacterDetailsScreenStackProps> = ({ route }) => {
    return (
        <CharacterDetails character={route.params.item} />
    );
};

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