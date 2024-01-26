import { Link } from  'react-router-dom'
import stile from '/src/moduli css/ErrorPage.module.css'

const ErrorPage = ({error = `THE PAGE CAN'T BE FOUND`}) => {
    return (
        <>
            <div className={stile.contenitoreMess}>
                <h1 className={stile.h1}>OOPS!</h1>
                <h2 className={stile.h2}>404 - {error}</h2>
                <Link to='/'  className={stile.link}>GO TO HOMEPAGE</Link>
             </div>
        </>
    );
};

export default ErrorPage;