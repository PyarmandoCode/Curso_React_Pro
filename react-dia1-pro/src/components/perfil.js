import 'bootstrap/dist/css/bootstrap.min.css';//Importando los estilos de boostratp
import "./css/styles.css"

export default function Perfil() {
  return (
    <div className='container'>
        <h1>Mi Aplicacion con Bootstrap</h1>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" alt='Imagen de Ejemplo'
        className='img-fluid rounded'
        />
    </div>
  )
}
