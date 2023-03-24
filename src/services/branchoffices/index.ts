import { clientBackend } from '../../config';

export const getBranchOffices = async () => {
    return await clientBackend.get('branchOffices');
};
