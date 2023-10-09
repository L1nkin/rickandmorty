import axios from "axios"
import { Info, Character, ApiResponse, CharacterFilter } from "../utils/Interfaces"
import { PermissionsAndroid } from "react-native"

const baseUrl = 'https://rickandmortyapi.com/api/'

export async function getCharacters(page?: number, filter?: CharacterFilter): Promise<Info<Character[]> | undefined> {
    try {
        const characters = await axios.get(
            `${baseUrl}character`,
            {
                params: { page, ...filter },
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
        return characters.data

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.warn(error);
        } else {
            console.warn((error as Error).message);
        }
        return undefined
    }
}