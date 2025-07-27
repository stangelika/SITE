import Head from 'next/head'
import VideoGallery from '../components/VideoGallery'
import InstagramFeed from '../components/InstagramFeed'

export default function Home() {
  // Массив с видеофайлами
  const videos = [
    { src: 'https://lksrental.site/2.mp4', title: 'Тест 2.mp4' },
    { src: 'https://lksrental.site/999.mp4', title: 'Тест 999.mp4' },
    { src: 'https://lksrental.site/888.mp4', title: 'Тест 888.mp4' },
    { src: 'https://lksrental.site/777.mp4', title: 'Тест 777.mp4' },
    { src: 'https://lksrental.site/333.mp4', title: 'Тест 333.mp4' },
    { src: 'https://lksrental.site/777_00090240.mp4', title: 'Тест 777_00090240.mp4' },
  ]

  return (
    <div className="container">
      <Head>
        <title>Тесты кинооптики и кинокамер</title>
        <meta name="description" content="Галерея тестов кинооптики и кинокамер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#181818" />
      </Head>
      <main>
        <h1 className="title">Тесты кинооптики и кинокамер</h1>
        <VideoGallery videos={videos} />
        <h2 className="subtitle">Лента Instagram</h2>
        <InstagramFeed username="haykkirakosyan_official" />
      </main>
      <style jsx>{`
        .container {
          background: #181818;
          min-height: 100vh;
          color: #eee;
          font-family: 'Montserrat', 'Arial', sans-serif;
          padding: 1rem;
        }
        main {
          max-width: 1200px;
          margin: 0 auto;
        }
        .title {
          font-size: 2.5rem;
          text-align: center;
          margin: 2rem 0 1rem 0;
          letter-spacing: 0.07em;
        }
        .subtitle {
          font-size: 1.5rem;
          margin-top: 3rem;
          text-align: center;
          letter-spacing: 0.05em;
        }
        @media (max-width: 768px) {
          .title {
            font-size: 1.8rem;
            margin: 1rem 0 0.5rem 0;
          }
          .subtitle {
            font-size: 1.2rem;
            margin-top: 2rem;
          }
          .container {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}