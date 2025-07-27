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
      `}</style>
    </div>
  )
}