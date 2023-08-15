import { Link } from 'react-router-dom'
import paintWorker from '../../../../assets/photos/pintorHero.png'

const HeroSection = () => {

    return (
        <div className='heroSection_container'>
            <div className='heroSection'>
                <section>
                    <img src={paintWorker} alt="" />
                </section>
                <section>
                    <p>
                        Cientos de pintores verificados a tu disposición
                    </p>
                    <Link to='/Clasificados'>
                        BUSCAR PINTORES
                    </Link>

                </section>
            </div>
        </div>
    )

}
export default HeroSection