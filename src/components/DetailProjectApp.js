import React from 'react'

export const DetailProjectApp = ({history}) => {

    const handleBack = () => {
        history.push('/projects')
    }

    return (
        <div>
            <h1>Detalle del proyecto</h1>
            <button className="button" onClick={ handleBack }>Regresar</button>
        </div>
    )
}