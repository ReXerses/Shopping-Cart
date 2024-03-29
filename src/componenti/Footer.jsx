import stile from '/src/moduli css/Footer.module.css'
export default function Footer () {

    return (
      <footer className={stile.footer}>

        <a href="https://github.com/ReXerses" target="_blank" className={stile.icona}>
            <img  src="/github.svg" alt="Personal Github link"/>
        </a>
        <a className={stile.anchor} href="https://github.com/ReXerses" target="_blank">ReXerses</a>

      </footer>
    )
}