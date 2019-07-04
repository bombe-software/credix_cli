import gql from 'graphql-tag';

export default gql`
mutation registro($email: String!, $nombre : String!, $nombre_usuario : String!, 
                    $password : String!, $sexo : String!, $token : String)
    {
        registro(email: $email, nombre: $nombre, nombre_usuario: $nombre_usuario,
        password: $password, sexo: $sexo, token: $token)
        {
            id,
            nombre
        }
    }
`;