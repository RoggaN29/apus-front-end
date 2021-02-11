import React from 'react';

export const ProjectCard = ({project, history}) => {

    const handleDetail = (e) => {
        e.preventDefault();
        history.push(`/project/${project.id}`)
    }

    return (
        <div className="card-project">
            <h2>{project.name}</h2>
            <span className={`label ${project.status}`}>{project.status}</span>
            <p>{project.lead}</p>
            <p>{project.description}</p>
            <p>{project.tags}</p>
            <hr/>
            <a href="/" className="link" onClick={handleDetail}>View Detail</a>
        </div>
    )
}
