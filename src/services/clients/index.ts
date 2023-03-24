import { clientBackend } from '../../config';

export const getClients = async () => {
    return await clientBackend.get('clients');
};