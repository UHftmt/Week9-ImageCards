function ImageCard({ url, title, description, author, uploadedDateTime }) {
    return (
        <div className='image-card' style={{
            width: '100%',
            height: '100%',
            border: '1px solid #bbbabaff',
            boxShadow: '0 2px 5px rgb(0, 0, 0, 0.1)',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <div className='image-container' style={{
                width: '92%',
                height: '70%',
                marginTop: '15px',
                overflow: 'hidden',
                borderRadius: '8px',
            }}>
                <img src={url} alt={title} className='image' style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}/>
            </div>
            <div className='card-info-container'>
                <h3 className='card-title'>{title}</h3>
                <p className='card-description' style={{
                    color: '#666'
                }}>{description}</p>
                <p className='card-info' style={{color: '#666'}}>
                    <strong style={{color: 'black'}}>Author: </strong>{author}
                </p>
                <p className='card-info' style={{color: '#666'}}>
                    <strong style={{color: 'black'}}>Uploaded: </strong>{uploadedDateTime}
                </p>
            </div>
        </div>
    );
}

export default ImageCard;