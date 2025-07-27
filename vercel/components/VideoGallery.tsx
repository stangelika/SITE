import { useState } from 'react'

export default function VideoGallery({ videos }) {
  const [likes, setLikes] = useState(() => {
    // Сохраняем лайки в localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('likes')
      return stored ? JSON.parse(stored) : {}
    }
    return {}
  })

  const handleLike = async (src) => {
    // Простейший POST-запрос на серверную функцию /api/like
    await fetch('/api/like', {
      method: 'POST',
      body: JSON.stringify({ src }),
      headers: { 'Content-Type': 'application/json' },
    })
    // Лайк в localStorage (фейковая реализация для demo)
    setLikes((prev) => {
      const updated = { ...prev, [src]: (prev[src] || 0) + 1 }
      localStorage.setItem('likes', JSON.stringify(updated))
      return updated
    })
  }

  return (
    <div className="gallery">
      {videos.map((video) => (
        <div key={video.src} className="card">
          <video src={video.src} controls width="100%" style={{ borderRadius: '9px', background: '#222' }} />
          <div className="info">
            <span>{video.title}</span>
            <button className="like" onClick={() => handleLike(video.src)}>
              ❤️ {likes[video.src] || 0}
            </button>
          </div>
        </div>
      ))}
      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        .card {
          background: #222;
          border-radius: 12px;
          box-shadow: 0 2px 12px #000a;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .info {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.5rem;
          font-size: 1.1rem;
        }
        .like {
          background: none;
          border: none;
          color: #ff6767;
          font-size: 1.2rem;
          cursor: pointer;
          transition: transform 0.12s;
        }
        .like:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  )
}