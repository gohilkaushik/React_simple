import React from 'react'
import Card from '../comman/Card';
import web from "../images/ser-1.jpg"
import app from "../images/ser-2.jpg"
import android from "../images/ser-3.jpg"
import digital from "../images/ser-4.jpg"
import marketing from "../images/ser-5.jpg"
import software from "../images/ser-6.jpg"

const Service = () => {
const CardData = [
   {
       imgsrc: web,
       title: "Web Development"
   },
   {
       imgsrc: app,
       title: "app Development"
   },
   {
       imgsrc: android,
       title: "android Development"
   },
   {
       imgsrc: digital,
       title: "digital Development"
   },
   {
       imgsrc: marketing,
       title: "marketing Development"
   },
   {
       imgsrc: software,
       title: "software Development"
   },
]

  return (
    <>
      <div className='container-fluid'>
         <h3 className='text-center mb-4 '>service</h3>
         <div className='service-card col-9 mx-auto'>
         {
            CardData.map((val,ind) => {
               return<Card key={ind}
               imgsrc={val.imgsrc}
               title={val.title}
               />
            })
         }
         </div>
      </div>
    </>
  );
};

export default Service;
