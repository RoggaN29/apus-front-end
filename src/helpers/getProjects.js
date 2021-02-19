import { getProjectsByName } from "./getProjectsByName";

const baseUrl = process.env.REACT_APP_API_URL;

export const getProjects = async(q) => {
    const url = `${baseUrl}projects`
    const res = await fetch( url );
    const { projects } = await res.json();
    const projectsFiltered = getProjectsByName( projects, q )
    return projectsFiltered;
}