import { clientBackend } from '../../config';

export const getCommunes = async () => {
    return await clientBackend.get('communes');
};