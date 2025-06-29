import axios from "../util/axiosInstance";

interface ProgressResponse {
    progress: string;
}

interface AllProgressResponse {
    mapId: string;
    progress: string;
    maxLimit: string;
}

export const retreiveData = async (mapId: string) => {
    if (!localStorage.getItem('token')) {
        console.log("this is the error");
        return "";
    }

    try {
        const res = await axios.get<ProgressResponse>(`/prog/${mapId}`);
        const progress = res.data.progress;
        
        return hex2bin(progress);

    } catch (e: any) {
        return ""; 
    }
}


export const getMaxLimit = async (mapId: string) => {
    if (!localStorage.getItem('token')) {
        return "";
    }

    try {
        const res = await axios.get<ProgressResponse>(`/prog/max/${mapId}`);
        const max = res.data.progress;

        return hex2bin(max);
    } catch (e: any) {
        return "";
    }
}


export const getAllUserData = async () => {
    if (!localStorage.getItem('token')) {
        return [];
    }

    try {
        const res = await axios.get<AllProgressResponse[]>(`/prog/all`);

        const allProgress = res.data.map(({mapId, progress, maxLimit}) => {
            const progBin = hex2bin(progress);
            const maxBin = hex2bin(maxLimit);

            const completed = [...progBin].filter(c => c == '1').length;
            const max = [...maxBin].filter(c => c == '1').length;

            return { mapId, completed, max };
        });
        return allProgress;


    } catch (e: any) {
        console.log(e.message);
        return [];
    }
}

export function hex2bin(hex: string) : string {
    hex = hex.replace("0x", "").toLowerCase();
    var out = "";
    for(var c of hex) {
        switch(c) {
            case '0': out += "0000"; break;
            case '1': out += "0001"; break;
            case '2': out += "0010"; break;
            case '3': out += "0011"; break;
            case '4': out += "0100"; break;
            case '5': out += "0101"; break;
            case '6': out += "0110"; break;
            case '7': out += "0111"; break;
            case '8': out += "1000"; break;
            case '9': out += "1001"; break;
            case 'a': out += "1010"; break;
            case 'b': out += "1011"; break;
            case 'c': out += "1100"; break;
            case 'd': out += "1101"; break;
            case 'e': out += "1110"; break;
            case 'f': out += "1111"; break;
            default: return "";
        }
    }

    return out;
}