import { Link } from  'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <h1>Questo percorso non esiste, torna indietro.</h1>
            <Link to='/'>
                Home
            </Link>
        </div>
    );
};

export default ErrorPage;