import React from 'react'
import CardData from '../comman/CardData';
import Card from '../comman/Card';
const Service = () => {
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
