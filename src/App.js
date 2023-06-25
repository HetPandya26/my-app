import React from 'react';
import ListView from './ListView';

const App = () => {
  
  const link = 'https://yt3.googleusercontent.com/ytc/AGIKgqMEs7nBJVSNr3kcQqxuMNBmrV1pAOMt6NsFDoz3=s900-c-k-c0x00ffffff-no-rj';
  return (
    <div className='Total'>
      <div className='First'>
      <div className='logo'>
          
            <img src={link} alt="greendzine tecnologies"  className='comp-logo'/>
            <div className='right-block' >
                <h1 className='heading1'><a className="cl" href="https://www.greendzine.in/">Greendzine Technologies</a></h1>
            </div>
      </div>
      </div>
      <ListView />
    </div>
  );
};

export default App;