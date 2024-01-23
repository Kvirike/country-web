import '../App.css';
import CoverPic from '../media/Cover.jpeg';

const CoverComponent = () => {

  const containerStyle = {
    backgroundImage: `url(${CoverPic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '75vh',
    borderRadius: '120px',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle} className='coverpic'></div>
  );
};

export default CoverComponent;