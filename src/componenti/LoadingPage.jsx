import stile from '/src/moduli css/LoadingPage.module.css'

const LoadingPage = () => {

    return (
        <div className={stile.loaderWrapper}>
            <div className={stile.loader}></div>
        </div>
    )
}

export default LoadingPage