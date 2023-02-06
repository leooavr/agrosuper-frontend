import { clientBackend } from '../../config';

export const getProvinces = async () => {
    return await clientBackend.get('provinces');
};
