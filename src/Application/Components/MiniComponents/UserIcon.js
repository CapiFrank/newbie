import { React, useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { getAccessToken, QUERY } from "Application/Context/ApiContext"

export default function UserIcon() {
    const [userName, setUserName] = useState("Login");
    const [image, setImage] = useState("");
    const [token, setToken] = useState("");
    const getToken = async () => {
        const data = await getAccessToken();
        if (data) {
            setImage(data.imageURL);
            setUserName(data.userName);
            setToken(data.access_token);
            return
        }
        setToken(sessionStorage.getItem('access_token'));
    }
    const getProfile = () => {
        const profile = JSON.parse(sessionStorage.getItem('profile'));
        if (profile) {
            setUserName(profile.userName);
            setImage(profile.imageURL);
        }
    }

    const logout = () => {
        setUserName("Login");
        setImage("");
        setToken("");
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
        sessionStorage.removeItem('profile');
    };

    useEffect(() => {
        getToken();
        getProfile();
    }, []);

    return (
        <div>

            {!token ?
                <a href={`${QUERY}`} className="text-white-variation flex items-center p-2 hover:bg-light-white rounded-md">
                    <FaUserCircle className="text-white-variation text-4xl mr-2"></FaUserCircle>
                    {`${userName}`}
                </a> :
                <div className="text-white-variation flex items-center p-2 hover:bg-light-white rounded-md cursor-pointer" onClick={logout}>
                    <div className="h-[2.25rem] w-[2.25rem] mr-2">
                        <img className="object-cover h-full w-full rounded-full" src={`${image}`} alt="Personal Profile" srcset="" />
                    </div>
                    {`${userName}`}
                </div>
            }
        </div>
    );
};

