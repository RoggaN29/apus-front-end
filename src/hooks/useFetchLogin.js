import {
    useEffect,
    useState
} from "react";
import { postLogin } from "../helpers/postLogin";

export const useFetchLogin = (data) => {
    const [state, setState] = useState({
        status: false,
        loading: true
    });

    useEffect(() => {
        postLogin(data)
            .then((response) => {
                console.log('useFetchLogin', response)
                setState({
                    status: true,
                    loading: false
                });
            })
            .catch(function (error) {
                console.log("Hubo un problema al loggearse:" + error.message);
            });
    }, []);

    return state;

};