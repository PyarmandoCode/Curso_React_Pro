import "./css/styles.css"
//Array
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    edad: 19
};

//JSX es una combinacion de HTML con JAVASCRIPT nos retorna porcion es de HTML
export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <p>{user.edad}</p>
            <img
                className="avatar"
                src={user.imageUrl} //{}me permiten interpretar el codigo
                alt={'Foto de ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}