import '../styles/Banner.css'
import logo from '../assets/logo.png'

const Banner = () => {
    const title = "Plant Shop"
    return (
    <div className="lmj-banner">
        <img src={logo} alt='Plant Shop' className='lmj-logo'></img>
        <h1 className='lmj-title'>{title}</h1> 
    </div>
    )
}


export default Banner