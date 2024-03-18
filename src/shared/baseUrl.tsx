const getBaseUrl = () => import.meta.env.BASE_URL.length > 1 ? import.meta.env.BASE_URL : '';
export const BASE_URL = getBaseUrl();
