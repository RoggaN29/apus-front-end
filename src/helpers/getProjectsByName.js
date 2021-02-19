
export const getProjectsByName = ( projects, name ) => {
    if ( name === '' ) {
        return projects;
    }

    name = name.toLocaleLowerCase();
    return projects.filter( project => project.name.toLocaleLowerCase().includes( name ) );
}