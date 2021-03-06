import {
    useEffect,
    useState
} from "react";
import {
    getProjects
} from "../helpers/getProjects";

export const useFetchProjects = ( q ) => {

    const [state, setState] = useState({
        projectsFiltered: [],
        loading: true
    });

    useEffect(() => {
        getProjects(q)
            .then((response) => {
                setState({
                    projectsFiltered: response,
                    loading: false
                });
            })
            .catch(function (error) {
                console.log("Hubo un problema con la petición:" + error.message);
            });
    }, [q]);

    return state;
};