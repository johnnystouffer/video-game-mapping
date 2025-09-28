import axios from '../util/axiosInstance';

interface AuthResponse {
    token: string;
}

interface UserResponse {
    email: string;
    username: string;
}

export const loginUser = async (email: string, password: string) => {
    try {
        const res = await axios.post<AuthResponse>(`/auth/login`, {
            email,
            password,
        });

        const token = res.data.token;
        if (token) {
            localStorage.setItem('token', token);
            const username = await getUsername();
            localStorage.setItem('username', username);
        }

        return token;

    } catch (e: any) {
        throw new Error(e);
    }
    
}

const getUsername = async () => {
    try {
        const res = await axios.get<UserResponse>(`/users/me`);

        const username = res.data.username;
        return username;
    } catch (e: any) {
        return "not working";
    }
}


interface SignUpResponse {
    username: string,
    email: string,
}

export const signUpUser = async (username: string, email: string, password: string) => {
    try {
        const res = await axios.post<SignUpResponse>(`/users/signup`, {
            username,
            email,
            password,
        });
        
        localStorage.setItem('username', res.data.username);
        await loginUser(email, password);

    } catch (e: any) {
        throw e;
    }
}