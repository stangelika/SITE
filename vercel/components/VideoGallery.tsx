import { useState } from 'react'

interface Video {
  src: string;
  title: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [likes, setLikes] = useState<Record<string, number>>(() => {
    // Сохраняем лайки в localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('likes')
      return stored ? JSON.parse(stored) : {}
    }
    return {}
  })

  const [loading, setLoading] = useState<Record<string, boolean>>({})

  const handleLike = async (src: string) => {
    setLoading(prev => ({ ...prev, [src]: true }))
    
    try {
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
    } catch (error) {
      console.error('Error liking video:', error)
    } finally {
      setLoading(prev => ({ ...prev, [src]: false }))
    }
  }

  return (
    <div className="gallery">
      {videos.map((video) => (
        <div key={video.src} className="card">
          <video src={video.src} controls width="100%" style={{ borderRadius: '9px', background: '#222' }} />
          <div className="info">
            <span>{video.title}</span>
            <button 
              className="like" 
              onClick={() => handleLike(video.src)}
              disabled={loading[video.src]}
            >
              ❤️ {likes[video.src] || 0}
              {loading[video.src] && <span className="loading">...</span>}
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
          padding: 0 1rem;
        }
        .card {
          background: #222;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.4);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s ease;
        }
        .card:hover {
          transform: translateY(-4px);
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
          padding: 0.5rem;
          border-radius: 6px;
        }
        .like:hover {
          transform: scale(1.2);
          background: rgba(255, 103, 103, 0.1);
        }
        .like:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .loading {
          margin-left: 4px;
          animation: pulse 1s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .gallery {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin: 1rem 0;
            padding: 0;
          }
          .info {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}