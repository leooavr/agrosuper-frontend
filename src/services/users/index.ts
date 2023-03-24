import { clientBackend } from '../../config';

export const postUsers = async () => {
    return await clientBackend.post('user');
};
