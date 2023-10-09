import axios from 'axios';
import { Info, Character, CharacterFilter } from '../utils/Interfaces';

const myAxios = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacters = async (page?: number, filter?: CharacterFilter): Promise<Info<Character[]> | undefined> => {
    const characters = await myAxios.get('/character', { params: { page, ...filter } });
    return characters.data;

};
