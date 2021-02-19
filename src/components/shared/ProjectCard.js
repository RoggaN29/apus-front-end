import React from 'react';

export const ProjectCard =  ({project, history}) => {

    const handleDetail = (e) => {
        e.preventDefault();
        history.push(`/project/${project._id}`)
    }

    return (
        <div className="card-project animate__animated animate__fadeIn">
            <h2>{project.name}</h2>
            <span className={`label ${project.status}`}>{project.status}</span>
            <p>{project.projectLead}</p>
            <p>{project.description}</p>
            {/* { (project.tags).map( (tag) => {
                return <span className="tags">#{tag} </span>
            })} */}
            <hr/>
            <a href="/" className="link" onClick={ handleDetail }>View Detail</a>
        </div>
    )
}
