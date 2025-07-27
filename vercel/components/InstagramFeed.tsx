export default function InstagramFeed({ username }) {
  // Встраивание Instagram через iframe или third-party сервис
  return (
    <div className="insta-feed">
      <iframe
        src={`https://www.instagram.com/${username}/embed`}
        width="360"
        height="460"
        frameBorder="0"
        scrolling="no"
        allowtransparency="true"
        style={{ border: 'none', borderRadius: '12px', background: '#222', width: '100%', maxWidth: 400 }}
        title="Instagram Feed"
      ></iframe>
      <style jsx>{`
        .insta-feed {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  )
}