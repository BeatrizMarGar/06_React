//import { storage } from '../../utils/storage'
import client, {
    setAuthHeader,
    removeAuthHeader,
} from "../../api/client";
import storage from "../../utils/storage";

  export const login = async (credentials, check) => {
    const url = process.env.REACT_APP_API_BASE_URL + '/api/auth/login';
    try {
        const token = await client.post(url, credentials);
        setAuthHeader(token['accessToken']);
        console.log(check, token['accessToken'])  //si pongo token.data.accessToken, 
                                                  //TypeError: Cannot read properties of undefined (reading 'accessToken')
        if (check) {
            storage.set('auth', token['accessToken']); 
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(error);
    }
};

export const logout = () =>
  Promise.resolve().then(() => {
    removeAuthHeader();
    storage.remove('auth');
  });
