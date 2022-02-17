import  './App.css';
import {BiTimeFive} from 'react-icons/bi';
import {MdLocationOn} from 'react-icons/md';
import {AiFillCamera,AiFillCar} from 'react-icons/ai';
import {CgAdidas} from 'react-icons/cg';
import {ImSpoonKnife} from 'react-icons/im';


const App = () =>{
  return (
    <div>
      {/* ====================header===============(first image)============================ */}
      <header>
        <img src = {require("./img/Banner.jpg")} alt = "Banner" className='head-text'/>
        <div className='text-on-image'>
            <h3> Universal Adventures </h3>
        </div>
      </header>

      <div className='below'>
        {/* ==============left side image============================================= */}
         <div className='skydiving'> <img src = {require("./img/Sky Diving.jpg")} alt = "Banner" className='head-left'/>
            <h3 className='text-on-image2'>Sky Diving</h3>
        </div>
        {/* ============= Right side two boxes========================= */}
        <div>
          <div className='box'>
              <img src = {require("./img/Scuba Diving.jpg")} alt = "Banner" className='head-right'/>
                  <div className='line'>
                     <div>
                        <div className='boxinside'><b>Scuba Diving in Grande Island, Goa</b>
                           <div className='smallicons'>
                               <p className='spaceicons'><BiTimeFive /> 
                                   8 hour</p>              
                                <p><MdLocationOn /> Goa, India</p>
                           </div>
                        </div>
                        <div>
                            <div className='imagesinside'>
                                <p className='smallbox'><ImSpoonKnife className='imagebold'/> <span className='caption'>snacks</span></p>              
                                <p className='smallbox'><AiFillCar className='imagebold'/> <span className='caption'>Transport</span></p>              
                                <p className='smallbox'><AiFillCamera className='imagebold'/> <span className='caption'>Photo/Video</span></p>              
                                <p className='smallbox'><CgAdidas className='imagebold'/> <span className='caption'>Activities</span></p>              
                            </div>  
                            <div className='imagesinside'>
                                <p className="box-for-text">Long tail boat ride</p>
                                <p className='box-for-text'>Underwater Photo and video</p>
                            </div>
                        </div>
                     </div>       
                   </div>
          <div>
            <div className='imagesinside'>
              <img src = {require("./img/fourstar.jpg")} alt = "Banner" className='rating'/>
              <p className='ratingnumber'>4.7</p>
             </div>
              <p className='numberreview'>36 reviews</p>
              <b className='numberreview1'>Starting from</b>
              <br></br>
              <b className='numberreview2'>₹ 1799</b>
              <br />
              <p className='ratingnumber3'>ViewDetails</p>

          </div> 
          
          </div>
          <div className='box'>
          <img src = {require("./img/Bungee Jumping.jpg")} alt = "Banner" className='head-right'/>
          <div className='line'>
            <div>
              <div className='boxinside'><b>Bungee Jumping in Goa</b>
              <div className='smallicons'>
              <p className='spaceicons'><BiTimeFive /> 
              30 min</p>              
              <p><MdLocationOn /> Goa, India</p>
              </div>
              </div>
              <div>
                <div className='imagesinside'>
                <p className='smallbox'><AiFillCamera className='imagebold'/> <span className='caption'>Photo/Video</span></p>              
                <p className='smallbox'><CgAdidas className='imagebold'/> <span className='caption'>Activities</span></p>              
                </div>  
                <div className='imagesinside'>
                  <p className="box-for-text">61 meter height</p>
                  <p className='box-for-text'>Jump photo & video</p>
                  <p className='box-for-text'>certificate</p>

                </div>
              </div>
            </div>       
          </div>
          <div>
            <div className='imagesinside'>
              <img src = {require("./img/fourstar.jpg")} alt = "Banner" className='rating'/>
          <p className='ratingnumber'>4.7</p>
          </div>
          <p className='numberreview'>36 reviews</p>
          <b className='numberreview1'>Starting from</b>
          <br></br>
          <b className='numberreview2'>₹ 2800</b>
           <br />
           <p className='ratingnumber3'>ViewDetails</p>

          </div> 
          
          </div>

          {/* <div className='box'>
          <img src = {require("./img/Bungee Jumping.jpg")} alt = "Banner" className='head-right'/>
          <b>Bungee Jumping in Goa</b>
          </div> */}
        </div>
      </div> 
    </div>
  );
}

export default App;
