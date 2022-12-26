import { clientBackend } from '../../config';

export const getRegions = async () => {
    return await clientBackend.get('regions');
};
