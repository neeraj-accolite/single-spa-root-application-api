import React, { useEffect, useState } from 'react';
import './styles.css';

function Header() {

  const [data, setData] = useState<any>(null);

  useEffect(()=>{
    const listener = (event:any)=>{
      console.log('aa ',event);
      setData(event.detail);
    }
    window.addEventListener('profile-order-fetched',listener);
    return ()=>{
      window.removeEventListener('profile-order-fetched',listener);
    }
  },[]);

  return (
    <div id="header">
      <img className='logoImage' src="https://www.nutrien.com/themes/custom/nutrien/logo.svg?ver=1721186473"/>
      <div className='actionBar'>
        <nav>
          <ul id='menu'>
            <li><a id="menu" href="/profiles">Profiles</a></li>
            <li><a href="/address" id="menu">Address</a></li>
            <li><a href="/orders" id="menu">Orders</a></li>
          </ul>
        </nav>
      </div>
      {
        data!=null &&
        <div style={{display:'flex', alignItems:'center',  justifyContent:'end', width:'100%', marginRight:'20px'}}>
          <img src={data?.user.avatar} width={30} height={30} ></img> 
          <div style={{marginLeft:'20px'}}>
            <div>
              <label style={{color:'gray', fontSize:'12px'}}>{data?.user.first_name} {data?.user.last_name}</label>
            </div>
            <div>
            <label style={{color:'gray', fontSize:'10px'}}>Qty: {data?.qty}</label>
            </div>
            <div>
            <label style={{color:'gray', fontSize:'10px'}}>Total: {data?.price}</label>
              </div>
          </div>
        </div>
      }
    </div>
  );
}
export default Header;