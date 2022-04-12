import axios from "axios";

export const apiUrl = "http://localhost:3001/api/v1/user";


export const getToken = async (email, password) => {
    try {
        const res = await axios.post(`${apiUrl}/login`, {
            email,
            password,
        });
        return res;
    } catch (err) {
        return {
            data: {},
            status: "error",
        };
    }
};

export const getUserInfo = async (token) => {
    try {
        const res = await axios.post(`${apiUrl}/profile`, {}, {
            headers: {
                "Content-type": "Application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data.body;
    }
    catch (err) {
        return {
            data: {},
            status: "error",
        };
    };
};

export const updateUserData = async (token, payload) => {
    try {
        const res = await axios.put(`${apiUrl}/profile`, {
            firstName: payload.firstName,
            lastName: payload.lastName,
        }, {
            headers: {
                "Content-type": "Application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data.body;
    }
    catch (err) {
        return {
            data: {},
            status: "error",
        };
    };
};
