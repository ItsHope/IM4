import React, {useState} from "react";
import "../Gallery/Gallery.css"
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../Img/img1.jpg'
import Img2 from '../Img/img2.jpg'
import Img3 from '../Img/img3.jpg'
import Img4 from '../Img/img4.jpg'
import Img5 from '../Img/img5.jpg'
import Img6 from '../Img/img6.jpg'
import Img7 from '../Img/blank.png'
import Img8 from '../Img/img8.jpg'
import Img9 from '../Img/img9.jpg'
import Img10 from '../Img/img10.jpg'
import Img11 from '../Img/img11.jpg'
import Img12 from '../Img/img12.jpg'
import Img13 from '../Img/img13.jpg'
import Img14 from '../Img/img14.jpg'
import Img15 from '../Img/img15.jpg'
import Img16 from '../Img/img16.jpg'
import Img17 from '../Img/img17.jpg'
import Img18 from '../Img/img18.jpg'
import Img19 from '../Img/img19.jpg'
import Img20 from '../Img/img20.jpg'
import Img21 from '../Img/img21.jpg'
import Img22 from '../Img/img22.jpg'
import Img23 from '../Img/img23.jpg'
import Img24 from '../Img/img24.jpg'
import Img25 from '../Img/img25.jpg'
import Img26 from '../Img/img26.jpg'
import Img27 from '../Img/img27.jpg'
import Img28 from '../Img/img28.jpg'
import Img29 from '../Img/img29.jpg'
import Img30 from '../Img/img30.jpg'
import Img31 from '../Img/img31.jpg'
import Img32 from '../Img/img32.jpg'
import Img33 from '../Img/img33.jpg'
import Img34 from '../Img/img34.jpg'
import Img35 from '../Img/img35.jpg'






const Gallery = () => {
    
    let data = [ {
        id:1,
        imgSrc: Img7,

    },
    {
        id:2,
        imgSrc: Img7,

    },
    {
        id:3,
        imgSrc: Img7,

    },
    {
        id:4,
        imgSrc:Img7,

    },

    {
        id:5,
        imgSrc:Img7,

    },
    {
        id:6,
        imgSrc:Img7,

    },
    {
        id:7,
        imgSrc:Img7,

    },
    {
        id:8,
        imgSrc:Img7,

    },
    {
        id:9,
        imgSrc:Img7,

    },

    {
        id:9,
        imgSrc:Img7,

    },

    {
        id:10,
        imgSrc:Img7,

    },

    {
        id:11,
        imgSrc:Img7,

    },

    {
        id:12,
        imgSrc:Img7,

    },

    {
        id:9,
        imgSrc:Img7,

    },

    {
        id:13,
        imgSrc:Img7,

    },

    {
        id:14,
        imgSrc:Img7,

    },

    {
        id:15,
        imgSrc:Img7,

    },

    {
        id:16,
        imgSrc:Img7,

    },

    {
        id:17,
        imgSrc:Img7,

    },

    {
        id:18,
        imgSrc:Img7,

    },

    {
        id:19,
        imgSrc:Img7,

    },
    {
        id:20,
        imgSrc:Img7,

    },
    {
        id:21,
        imgSrc:Img7,

    },
    {
        id:22,
        imgSrc:Img7,

    },
    {
        id:23,
        imgSrc:Img7,

    },
    {
        id:24,
        imgSrc:Img21,

    },
    {
        id:25,
        imgSrc:Img22,

    },
    {
        id:26,
        imgSrc:Img7,

    },
    {
        id:27,
        imgSrc:Img7,

    },
    {
        id:28,
        imgSrc:Img7,

    },
    {
        id:29,
        imgSrc:Img7,

    },
    {
        id:30,
        imgSrc:Img7,

    },
    {
        id:31,
        imgSrc:Img7,

    },
    {
        id:32,
        imgSrc:Img7,

    },
    {
        id:33,
        imgSrc:Img7,

    },
    {
        id:34,
        imgSrc:Img20,

    },
    {
        id:35,
        imgSrc:Img23,

    },
    {
        id:36,
        imgSrc:Img7,

    },
    {
        id:37,
        imgSrc:Img7,

    },
    {
        id:38,
        imgSrc:Img7,

    },
    {
        id:40,
        imgSrc:Img7,

    },
    {
        id:41,
        imgSrc:Img10,

    },
    {
        id:42,
        imgSrc:Img16,

    },
    {
        id:43,
        imgSrc:Img17,

    },
    {
        id:44,
        imgSrc:Img18,

    },
    {
        id:45,
        imgSrc:Img19,

    },
    {
        id:46,
        imgSrc:Img24,

    },
    {
        id:47,
        imgSrc:Img25,

    },
    {
        id:48,
        imgSrc:Img26,

    },
    {
        id:50,
        imgSrc:Img27,

    },
    {
        id:51,
        imgSrc:Img7,

    },
    {
        id:52,
        imgSrc:Img1,

    },
    {
        id:53,
        imgSrc:Img12,

    },
    {
        id:54,
        imgSrc:Img13,

    },
    {
        id:55,
        imgSrc:Img14,

        
    },
    {
        id:56,
        imgSrc:Img15,

        
    },
    {
        id:57,
        imgSrc:Img28,

        
    },
    {
        id:58,
        imgSrc:Img29,

        
    },
    {
        id:59,
        imgSrc:Img30,

        
    },
    {
        id:60,
        imgSrc:Img31,

        
    },
    {
        id:61,
        imgSrc:Img7,

        
    },
    {
        id:62,
        imgSrc:Img2,

        
    },
    {
        id:63,
        imgSrc:Img11,

        
    },
    {
        id:64,
        imgSrc:Img7,

        
    },
    {
        id:65,
        imgSrc:Img7,

        
    },
    {
        id:66,
        imgSrc:Img32,

        
    },
    {
        id:67,
        imgSrc:Img33,

        
    },
    {
        id:68,
        imgSrc:Img7,

        
    },
    {
        id:69,
        imgSrc:Img7,

        
    },
    {
        id:70,
        imgSrc:Img7,

        
    },
    {
        id:71,
        imgSrc:Img7,

        
    },
    {
        id:72,
        imgSrc:Img3,

        
    },
    {
        id:73,
        imgSrc:Img9,

        
    },
    {
        id:74,
        imgSrc:Img7,

        
    },
    {
        id:75,
        imgSrc:Img7,

        
    },
    {
        id:76,
        imgSrc:Img34,

        
    },
    {
        id:77,
        imgSrc:Img35,

        
    },
    {
        id:78,
        imgSrc:Img7,

        
    },
    {
        id:79,
        imgSrc:Img7,

        
    },
    {
        id:80,
        imgSrc:Img7,

        
    },
    {
        id:81,
        imgSrc:Img7,

        
    },{
        id:82,
        imgSrc:Img4,

        
    },{
        id:83,
        imgSrc:Img8,

        
    },{
        id:84,
        imgSrc:Img7,

        
    },{
        id:85,
        imgSrc:Img7,

        
    },{
        id:86,
        imgSrc:Img7,

        
    },{
        id:87,
        imgSrc:Img7,

        
    },{
        id:88,
        imgSrc:Img7,

        
    },{
        id:89,
        imgSrc:Img7,

        
    },{
        id:90,
        imgSrc:Img7,

        
    },{
        id:91,
        imgSrc:Img7,

        
    },{
        id:92,
        imgSrc:Img5,

        
    },{
        id:93,
        imgSrc:Img6,

        
    },{
        id:94,
        imgSrc:Img7,

        
    },{
        id:95,
        imgSrc:Img7,

        
    },{
        id:96,
        imgSrc:Img7,

        
    },
    {
        id:97,
        imgSrc:Img7,

        
    },
    {
        id:98,
        imgSrc:Img7,

        
    },
    {
        id:99,
        imgSrc:Img7,

        
    },
    {
        id:100,
        imgSrc:Img7,

        
    },

    




    

    

]
const [model, setModel] = useState(false);
const [tempimgSrc, setTempImgSrc] = useState('')
 const getImg =(imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
 }
    return(
        <> 
        <div className={model? "model open": "model"}>
          <img src={tempimgSrc} />
          <CloseIcon onClick={()=>setModel(false)}/>
        </div>
         <div className="gallery">
          {
              data.map((item, index)=>{
              return(
                  <div className="pictures" key={index} onClick={()=> getImg(item.imgSrc)}>

                      <img src={item.imgSrc} style= {{width:"100%"}}/>
                  </div>

              )
              })}
      
        </div>
        </>
        
    )
}

export default Gallery