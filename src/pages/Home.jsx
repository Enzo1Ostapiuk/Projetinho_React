function Home() {
  return (
    <section className='container'>
      <div className='apresentacao'>
        <p>
          Olá, sou <br />
          <span>Enzo Ostapiuk</span> <br />
          Dev Full Stack
        </p>
        <button className='btn btn-red'>
          Saiba mais sobre nós!
        </button>
      </div>
      <figure>
        <img className='img-home' src="/sua-imagem.svg" alt="Imagem da home" />
      </figure>
    </section>
  )
}

export default Home