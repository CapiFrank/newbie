import axios from 'axios';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const CLIENT_ID = 'cbff3448b8dc4b50b9ba0f1ee2a79ae9';
const CLIENT_SECRET = 'e22599f500864caab0e5cdccfc8b66a6';
const REDIRECT_URL = 'http://localhost:3000';
export const auxiliarImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
export let TOKEN = (request) => {
    return request ? request : sessionStorage.getItem('access_token');
}

export const QUERY = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&show_dialog=true`;

const getProfile = async (token) => {
    const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return data;
};

export const getAccessToken = async () => {
    let search = window.location.search;
    let accessToken = TOKEN();
    if (!accessToken && search) {
        const code = getAccessCode(search);
        const body = `grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URL}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        const data = await requestAPI({ body: body });
        accessToken = data.access_token;
        const profile = await setProfile(accessToken);
        return {
            access_token: data.access_token,
            userName: profile.display_name,
            imageURL: profile.images[0].url
        }
    }
}
const setProfile = async (accessToken) => {
    return await getProfile(accessToken).then((response) => {
        window.sessionStorage.setItem('profile', JSON.stringify({ userName: response.display_name, imageURL: response.images[0].url }));
        return response;
    });
}
const getAccessCode = (search) => {
    const access_code = search.substring(1).split('=')[1];
    window.history.pushState('', '', REDIRECT_URL);
    return access_code;
};

const refreshAccessToken = async () => {
    const refreshToken = sessionStorage.getItem('refresh_token');
    const body = `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${CLIENT_ID}`;
    return await requestAPI({ body: body }).access_token;
}
const requestAPI = async (request) => {
    const { data } = await axios.post(TOKEN_ENDPOINT, request.body, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        }
    });
    if (data) {
        if (data.access_token) {
            const accessToken = data.access_token;
            sessionStorage.setItem('access_token', accessToken);
        }
        if (data.refresh_token) {
            const refreshToken = data.refresh_token;
            sessionStorage.setItem('refresh_token', refreshToken);
        }
    }
    return data;
}

export const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(async (request) => {
    const url = request.url;
    request.url = `https://api.spotify.com/v1/${url}`;
    request.headers = { 'Authorization': `Bearer ${TOKEN()}` };
    return request;
});

axiosInstance.interceptors.response.use(response => response, async (error) => {
    let resp = error;
    if (resp.response.status) {
        const accessToken = await refreshAccessToken();
        resp = await axios.get(error.request.responseURL, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }
    return resp;
});
export const getArtist = async (id) => {
    if (TOKEN()) {
        const { data } = await axiosInstance.get("artists/" + id);
        return data;
    }
};

export const getAlbums = async (id) => {
    if (TOKEN()) {
        const { data } = await axiosInstance.get("artists/" + id + '/albums');
        return data.items;
    }
};
export const getAlbum = async (id) => {
    if (TOKEN()) {
        const { data } = await axiosInstance.get("albums/" + id);
        return data;
    }
};
export const searchArtists = async (searchKey) => {
    if (TOKEN() && searchKey) {
        let { data } = await axiosInstance.get('search', {
            params: {
                q: searchKey,
                type: "artist"
            }
        });
        return data.artists.items;
    }
}