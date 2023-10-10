import { CharacterDetailsScreenStackProps } from '../../App';
import CharacterDetails from './CharacterDetails';
import React from 'react';

export const CharacterDetailsScreen: React.FC<CharacterDetailsScreenStackProps> = ({ route }) => {
    return (
        <CharacterDetails character={route.params.item} />
    );
};
