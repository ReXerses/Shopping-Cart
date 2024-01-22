import Footer from "./Footer";
import stile from '/src/moduli css/OurBrand.module.css';

const OurBrand = () => {
    return (
        <>  
            
                <div className={stile.primaParte}>
                    <div className={stile.modale}>
                        <h2 className={stile.h2}>YOU</h2>
                        <h3 className={stile.h3}>“ Each garment is a brush, and your body is the canvas ”</h3>
                        <span className={stile.spanFrasi}>Express your essence through fashion with our eclectic clothing pieces.</span>
                        <span className={stile.spanFrasi}><span style={{ color: '#FFEB3B' }}> YOU</span>, the protagonist of your style story, will discover in our selection the perfect emblem for your individuality.</span>
                        <span className={stile.spanFrasi}>Every detail, a stroke of your personality. Rediscover yourself through fashion; with us, your style comes to life.</span>
                    </div>
                </div>
                <div className={stile.secondaParte}>
                    <div className={stile.modale}>
                        <h2 className={stile.h2}>WE</h2>
                        <h3 className={stile.h3}>“ At the heart of production lies the expertise of our team ”</h3>
                        <span className={stile.spanFrasi}>At the core of our production shines the impeccable artistry of our team.</span>
                        <span className={stile.spanFrasi}><span style={{ color: '#FFEB3B' }}> WE</span>, with passion and expertise, craft unique fashion pieces.</span>
                        <span className={stile.spanFrasi}>Every stitch is a testament to our dedication to excellence. </span>
                        <span className={stile.spanFrasi}>Choosing our products embraces a style experience inspired by the mastery of our talented professionals.</span>
                    </div>
                </div>
            
            <Footer />
        </>
    )
}

export default OurBrand;