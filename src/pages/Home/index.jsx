import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, sou <br />
            <span>Enzo Ostapiuk</span> <br />
            Dev Full Stack
          </p>
          <Link to="/sobre" className='btn btn-red'>
            Saiba mais sobre nós!
          </Link>
        </div>
        <figure>
          <img className='img-home' src="/sua-imagem.svg" alt="Imagem da home" />
        </figure>
      </section>
      <Footer />
    </>
  )
}

export default Home