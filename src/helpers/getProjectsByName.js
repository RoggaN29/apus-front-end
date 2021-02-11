import { projects } from '../data/projects';

export const getProjectsByName = ( name ) => {
    if ( name === '' ) {
        return projects;
    }

    name = name.toLocaleLowerCase();
    return projects.filter( project => project.name.toLocaleLowerCase().includes( name ) );
}