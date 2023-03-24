import { clientBackend } from '../../config';

export const getSales = async () => {
    return await clientBackend.get('sales');
};