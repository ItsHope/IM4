import React, {useState} from "react";
import "../Gallery/Gallery.css"
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../Img/img1.jpg'
import Img2 from '../Img/img2.jpg'
import Img3 from '../Img/img3.jpg'
import Img4 from '../Img/img4.jpg'
import Img5 from '../Img/img5.jpg'
import Img6 from '../Img/img6.jpg'

const Gallery = () => {
    let data = [ {
        id:1,
        imgSrc: Img1,

    },
    {
        id:2,
        imgSrc: Img2,

    },
    {
        id:3,
        imgSrc: Img3,

    },
    {
        id:4,
        imgSrc:Img4,

    },

    {
        id:5,
        imgSrc:Img5,

    },
    {
        id:6,
        imgSrc:Img6,

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