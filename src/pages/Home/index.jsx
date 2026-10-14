import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Home.module.css'   // ← TEM QUE TER ESSA LINHA!

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, sou <br />
              <span>Enzo Ostapiuk</span> <br />
              Dev Full Stack
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre nós!
            </Link>
          </div>
          <figure>
            <img className={styles.img_home} src="home.svg" alt="Imagem da home" />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  )
}

export default Home