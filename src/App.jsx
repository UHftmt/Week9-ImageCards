import ImageCard from './ImageCard';

import MaidCat from './assets/MaidCat.jpg';
import SamuraiCat from './assets/SamuraiCat.jpg';
import BoyFriendMateria from './assets/BoyFriendMateria.jpg';
import FashionCat from './assets/FashionCat.jpg';
import FunnyCat from './assets/FunnyCat.jpg';
import LazyCat from './assets/LazyCat.jpg';

const data = [
  {
    id: 1,
    title: 'Maid Cat',
    url: MaidCat,
    description: "Cute maid cate babysitting a baby",
    author: 'Bettmann',
    uploaded_datetime: '11/03/2016, 01:55:27',
  },

  {
    id: 2,
    title: 'Samurai Cat',
    url: SamuraiCat,
    description: 'An samurai cat',
    author: 'INA Photo Agency',
    uploaded_datetime: '22/01/2021, 14:27:33',
  },

  {
    id: 3,
    title: 'BoyFriendMateria',
    url: BoyFriendMateria,
    description: 'Are you okay cat',
    author: 'Kseniya Ovchinnikova',
    uploaded_datetime: '22/06/2023, 09:45:12',
  },

  {
    id: 4,
    title: 'Fashion Cat',
    url: FashionCat,
    description: 'An fashion cat',
    author: 'MamiGibbs',
    uploaded_datetime: '11/10/2022, 18:53:11',
  },

  {
    id: 5,
    title: 'Funny Cat',
    url: FunnyCat,
    description: 'An funny cat',
    author: 'JTSiemer',
    uploaded_datetime: '05/03/2014, 09:21:56',
  },

  {
    id: 6,
    title: 'Lazy Cat',
    url: LazyCat,
    description: 'An lazy cat',
    author: 'Kilito Chan',
    uploaded_datetime: '16/04/2021, 11:34:07',
  },
]

function App() {
  return (
    <div className='App' style={{
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'sans-serif',
    }}>
      <h1 className='header'>Image Gallery</h1>
      <div className='main-content' style={{
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(3, 400px)',
        gridTemplateRows: '400px 400px',
        gap: '30px',
        }}>
        {data.map(image => (
          <ImageCard
            key={image.id}
            url={image.url}
            title={image.title}
            description={image.description}
            author={image.author}
            uploadedDateTime={image.uploaded_datetime}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
