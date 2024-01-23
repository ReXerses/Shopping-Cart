import Footer from "./Footer";
import stile from '/src/moduli css/LoginPage.module.css';
import { AppContext } from "./Navbar";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { setIsLogged, setUserName } = useContext(AppContext);
    const Navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Impedisce il comportamento predefinito del form (ricarica la pagina)
        setUserName(event.target[0].value);
        setIsLogged(true);
        Navigate('/');
    };
    return (
        <>
    
            <div className={stile.contenitoreForm}>
                <form className={stile.formLogin} onSubmit={handleSubmit}>

                    <h2 className={stile.h1SignIn}>Sign In</h2>

                    <div className={stile.inputLogin}>
                        <label htmlFor="userName">User Name</label>
                        <input className={stile.input} type="text" name="userName" id="nome"  placeholder="User Name" required maxLength={12}/>
                    </div>

                    <div className={stile.inputLogin}>
                        <label htmlFor="passWord">Password</label>
                        <input className={stile.input} type="password" name="passWord" id="password" placeholder="Password" required minLength={8}/>
                    </div>

                    <button type="submit" className={stile.submitBtn}>Submit</button>
                    <span className={stile.forgotPass}>Forgot <span style={{ color: 'blue' }}>password?</span></span>
                </form>
                

            </div>

            <Footer />
        </>
    )
}

export default LoginPage;