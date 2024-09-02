import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import img1 from './images1.png';
import img2 from './images2.png';
import img3 from './images3.png';
import img4 from './images4.png';
import img5 from './images5.png';
import img6 from './images6.png';
import img7 from './images7.png';
import img8 from './images8.png';
import img9 from './images9.jpg';
import img10 from './images10.jpg';
import img11 from './images11.jpg';
import img12 from './images12.jpg';




class Content extends React.Component {
  render() {
    return (
   <div>
    <div className='container'>
        <div className='video'>
                    <div className='img2'>
                        <img src={img1} alt="logo1" className="logo1" />
                        <h6>Healthy Food </h6>
                        <p>Healthy Fooodieee taking is good for health</p>
                    </div>
                    <div className='img2'>
                        <img src={img2} alt="logo1" className="logo1" />
                        <h6>Developer </h6>
                        <p>HTML,Css.javascript,Reactjs</p>
                    </div>
                        <div className='img2'>
                        <img src={img3} alt="logo1" className="logo1" />
                        <h6>Home Food</h6>
                        <p>Home made foodz</p>
                    </div>
                        <div className='img2'>
                        <img src={img4} alt="logo1" className="logo1" />
                        <h6>Nature </h6>
                        <p>Nature  is likely good feels</p>
                    </div>
        </div>
        <div className='video'>
                    <div className='img2'>
                        <img src={img5} alt="logo1" className="logo1" />
                        <h6>AI </h6>
                        <p>Artificial Intelligence</p>
                    </div>
                    <div className='img2'>
                        <img src={img6} alt="logo1" className="logo1" />
                        <h6>Youtube content </h6>
                        <p>This is youtube channel</p>
                    </div>
                        <div className='img2'>
                        <img src={img7} alt="logo1" className="logo1" />
                        <h6>CAR </h6>
                        <p>Maruthi cars welcomes you</p>
                    </div>
                        <div className='img2'>
                        <img src={img8} alt="logo1" className="logo1" />
                        <h6>Birds </h6>
                        <p>This is youtube channel</p>
                    </div>
        </div>
        <div className='video'>
                    <div className='img2'>
                        <img src={img9} alt="logo1" className="logo1" />
                        <h6>Nature </h6>
                        <p>Nature  is likely good feels</p>
                    </div>
                    <div className='img2'>
                        <img src={img10} alt="logo1" className="logo1" />
                        <h6>Youtube content </h6>
                        <p>This is youtube channel</p>
                    </div>
                        <div className='img2'>
                        <img src={img11} alt="logo1" className="logo1" />
                        <h6>Cars </h6>
                        <p>This is youtube channel</p>
                    </div>
                        <div className='img2'>
                        <img src={img12} alt="logo1" className="logo1" />
                        <h6>Youtube content </h6>
                        <p>This is youtube channel</p>
                    </div>
        </div>
    </div>
   </div>
    );
  }
}

export default Content;
