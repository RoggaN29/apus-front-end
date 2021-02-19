const baseUrl = process.env.REACT_APP_API_URL;

export const postCreateProject = ( data ) => {
    const url = `${baseUrl}projects/create`;
    const res = fetch( url , {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    }).then( res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log(response));

    return res;
}