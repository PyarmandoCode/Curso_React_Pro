import { useEffect, useState } from "react";
import { usersApi } from "../pages/api/UserApi";

export const useUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        //Metodo para consumir el API
        getUsers();
    }, [])

    const getUsers = async () => {
        const resp = await usersApi.get('https://reqres.in/api/users');
        setUsers(resp.data.data);
    }
    return {
        users
    }


}





