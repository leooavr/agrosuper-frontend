import { clientBackend } from '../../config';

export const login = async (rut: string, password: string) => {
    return await clientBackend.post('auth/login', {
        rut,
        password
    });
};
