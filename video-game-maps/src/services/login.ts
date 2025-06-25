import axios from '../util/axiosInstance';

interface AuthResponse {
    token: string;
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
        }

        return token;

    } catch (e: any) {
        console.log('error bitch', e.message);
        throw e;
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
        console.log('error bitch', e.message);
        throw e;
    }
}