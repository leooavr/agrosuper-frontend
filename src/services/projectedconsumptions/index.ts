import { clientBackend } from '../../config';

export const getProjectedConsumptions = async () => {
    return await clientBackend.get('projectedConsumptions');
};