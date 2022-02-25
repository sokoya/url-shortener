import * as api from '../api';
export const createShortUrls = async ( text ) => {
    try {
        const { data } = await api.getShortUrls( text );
        return data;
    } catch ( err ) {
        console.log( err.message );
    }
}