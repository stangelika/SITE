interface InstagramFeedProps {
  username: string;
}

export default function InstagramFeed({ username }: InstagramFeedProps) {
  // Instagram embed using embedsocial or similar service
  // For now, we'll use a placeholder that links to the Instagram profile
  return (
    <div className="insta-feed">
      <div className="instagram-placeholder">
        <div className="instagram-header">
          <h3>@{username}</h3>
          <a 
            href={`https://www.instagram.com/${username}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            Открыть в Instagram →
          </a>
        </div>
        <div className="instagram-description">
          <p>Следите за новыми видео и тестами на официальной странице Instagram</p>
        </div>
      </div>
      <style jsx>{`
        .insta-feed {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2rem 0;
        }
        .instagram-placeholder {
          background: #222;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }
        .instagram-header {
          margin-bottom: 1rem;
        }
        .instagram-header h3 {
          color: #ff6767;
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .instagram-link {
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          display: inline-block;
          font-weight: 600;
          transition: transform 0.2s;
        }
        .instagram-link:hover {
          transform: translateY(-2px);
        }
        .instagram-description {
          margin-top: 1rem;
          color: #ccc;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  )
}