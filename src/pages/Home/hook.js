import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_URL;

export const getProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
