
function ImageCreate(image) {
    return(
        <>
        <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '8px',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '12px',
              lineHeight: '1.5',
            }}
          >
            <div><strong>Creator:</strong> {image.creator || 'Unknown'}</div>
            <div>❤️ Likes: {image.likes || 0}</div>
            <div>💬 Comments: {image.comments || 0}</div>
            <div>⭐ Favorites: {image.favorites || 0}</div>
          </div>
        </>
    )
}
export default ImageCreate;