import { storage } from "../../utils/storage";
import client, {
    setAuthHeader,
    removeAuthHeader,
} from "../../api/client";

export const login = credentials => {
    return client.post('/auth/login', credentials).then(({accessToken}) => {
        setAuthHeader(accessToken)
        storage.set('auth', accessToken)
    })
}

export const logout = () => 
    Promise.resolve().then(() => {
    removeAuthHeader();
    storage.remove('auth')
})