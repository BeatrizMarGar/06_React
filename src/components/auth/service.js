//import { storage } from '../../utils/storage'
import client, {
    setAuthHeader,
    removeAuthHeader,
} from "../../api/client";
import storage from "./Login/storage";

  export const login = async (credentials, check) => {
    const url = 'http://localhost:3001/api/auth/login';
    try {
        const token = await client.post(url, credentials);
        setAuthHeader(token['accessToken']);
        console.log(check, token['accessToken']) //si pongo token.data.accessToken, 
                                 //TypeError: Cannot read properties of undefined (reading 'accessToken')
        if (check) {
            storage.set('auth', token['accessToken']); 
        }
    } catch (error) {
        return Promise.reject(error);
    }
};

export const logout = () =>
  Promise.resolve().then(() => {
    removeAuthHeader();
    storage.remove('auth');
  });
