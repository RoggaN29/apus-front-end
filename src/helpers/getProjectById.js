import {projects} from '../data/projects';

export const getProjectById = ( projectId ) => {
    const dataProject = projects.find( (project) => {
        return project.id === projectId
    })
    return dataProject;
}
