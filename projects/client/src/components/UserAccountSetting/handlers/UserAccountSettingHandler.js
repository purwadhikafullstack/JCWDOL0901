import axios from "axios";

export const userAccountSettingHandler = async (data) => { 
    try {
        const response = await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/profile/update`, data);
        Navigate()
        return response.data
    } catch (error) {
        throw error;
    }
 }