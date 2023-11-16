import React from 'react'

import Link from 'next/link'

//Style
import Style from './Discover.module.css'

const Discover = () => {

  //disc menu
  const discover=[ 

  {
    name:"Search",
    link:"search"
  },
  {
    name:"User Profile",
    link:"authorprofile"
  },
  {
    name:"NFT Details",
    link:"NFT-detaills"
  },

  {
    name:"Connect wallet",
    link:"wallet"
  }

  ];
  return (
    <div>
      {discover.map((el,i) => (
      <div key={i+1} className={Style.discover}> 
        {/* <Link href={{pathname:`${el.link}`}}> */}
          {el.name}
        {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Discover