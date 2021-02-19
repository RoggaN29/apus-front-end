const baseUrl = process.env.REACT_APP_API_URL_LOGIN;

export const postLogin = ( data ) => {
    const url = `${baseUrl}auth`;
    const res = fetch( url , {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    }).then( res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => response);

    return res;
}