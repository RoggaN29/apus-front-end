export const getProjectById = ( projects, projectId ) => {

    const dataProject = projects.find( (project) => {
        return project._id === projectId
    })
    return dataProject;
}