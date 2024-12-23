import { post } from '../until/get';

export const Submit = async (data) => {
    const res = await post("submit", data)
    return res;
};
