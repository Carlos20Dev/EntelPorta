import './login.css'
import img_login from '../../images/img-login.png'

function login() {
    return(
        <div className="container">
            <div className="box">
                <div className="form">
                    <h3>BIENVENIDOS A ENTEL</h3>
                    <form>
                        <label className='email'>Email</label>
                        <input type="text" className='input-email' placeholder="user@entel.pe"/>
                        <label className='pass'>Contraseña</label>
                        <input type="password" className='input-pass'/>
                        
                        <div className='reset'>

                            <label className='font-12'>
                                <input type="checkbox"/>
                                Recordar Contraseña
                            </label>
                        
                            <a href="*" className='font-12'>¿Olvidate tu contraseña?</a>

                        </div>

                        <input type="submit" value={'INGRESAR'} className='button-ingresar'/>

                    </form>
                </div>
                <div className="image">
                    <img src={img_login} alt="login-image"/>
                </div>
            </div>
        </div>
    );
}

export default login