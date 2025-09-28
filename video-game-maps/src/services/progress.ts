import axios from "../util/axiosInstance";

interface ProgressResponse {
    progress: string;
}

interface AllProgressResponse {
    mapId: string;
    progress: string;
    maxLimit: string;
}

export const retreiveData = async (mapId: string, maxLimit: number) => {
    
    if (!localStorage.getItem('token')) {
        return "";
    }

    try {
        const res = await axios.get<ProgressResponse>(`/prog/${mapId}`);
        const progress = res.data.progress;
        
        if (progress === "0x0") {
            return "0000";
        }
        return hex2binNoPadding(progress, maxLimit);

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
        return [];
    }
}

export const sendUserProgress = async (worldId: string, prog: string): Promise<void> => {
    if (!localStorage.getItem('token')) return;

    try {
        const progress = bin2hex(prog);
        await axios.put(`/prog/${worldId}`, { progress });
    } catch (e: any) {
        console.error("Failed to send user progress:", e.message);
    }
};



export function bin2hex(bin: string): string {
    if (bin.length % 4 !== 0) {
        // Pad with leading zeros to make the length a multiple of 4
        bin = bin.padStart(Math.ceil(bin.length / 4) * 4, '0');
    }

    let out = "";
    for (let i = 0; i < bin.length; i += 4) {
        const chunk = bin.slice(i, i + 4);
        switch(chunk) {
            case "0000": out += "0"; break;
            case "0001": out += "1"; break;
            case "0010": out += "2"; break;
            case "0011": out += "3"; break;
            case "0100": out += "4"; break;
            case "0101": out += "5"; break;
            case "0110": out += "6"; break;
            case "0111": out += "7"; break;
            case "1000": out += "8"; break;
            case "1001": out += "9"; break;
            case "1010": out += "a"; break;
            case "1011": out += "b"; break;
            case "1100": out += "c"; break;
            case "1101": out += "d"; break;
            case "1110": out += "e"; break;
            case "1111": out += "f"; break;
            default: return "";
        }
    }

    return "0x" + out;
}


export function overlayRight(shorter: string, longer: string) {
    const start = longer.length - shorter.length;
    return longer.split('').map((bit, i) => {
        if (i >= start) {
            return shorter[i - start];
        }
        return bit;
    }).join('');
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


export function hex2binNoPadding(hex: string, maxLimit: number) : string {
    hex = hex.replace("0x", "").toLowerCase();
    var out = "";
    
    for(let i = hex.length - 1; i >= 0; i--) {
        switch(hex[i]) {
            case "0": out += "0000"; break;
            case "1": out += "1000"; break;
            case "2": out += "0100"; break;
            case "3": out += "1100"; break;
            case "4": out += "0010"; break;
            case "5": out += "1010"; break;
            case "6": out += "0110"; break;
            case "7": out += "1110"; break;
            case "8": out += "0001"; break;
            case "9": out += "1001"; break;
            case "a": out += "0101"; break;
            case "b": out += "1101"; break;
            case "c": out += "0011"; break;
            case "d": out += "1011"; break;
            case "e": out += "0111"; break;
            case "f": out += "1111"; break;
            default: return "";
        }
    }
    let unpadded = out.substring(0, maxLimit-1);
    return [...unpadded].reverse().join("");
}