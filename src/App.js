import React from 'react';
import './App.css';
import './css/style.css';
import VideoDisplay from './js/component/videoDisplay';
import Header from './js/layout/header';
import './css/layout/header.css'


function App() {
  const videos = [
    {
      url:'/www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Issue'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
    {
      url:'https://www.youtube.com/watch?v=zPwAeSLLoqU',
      title: 'Samsung 7',
      description: 'Android',
      status:'Passed'
    },
  ];

  const listItems = videos.map((video, index) =>
    <div key={index} >
        <VideoDisplay url={video.url}/>
        <div className='video-detail'>
          <div className='detail'>
            <p className='titleDevice'>{video.title}</p>
            <p className='descriptionDevice'>{video.description}</p>
          </div>
          <button className='button text-button button-passed'>{video.status}</button>
         
        </div>
    </div>
  );

  return (
    <>
      <Header></Header>
      <div className="list-device">
        <div className='session-header-device'>
          <div classsName='device-type'>
            <h3 className='text-name-session'>Current Test Session</h3>
            <p className='p'>
              <svg className='number-type-device' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6517 8.07956C12.3057 8.84556 12.1407 9.18756 11.6947 9.86456C11.0737 10.8096 10.1987 11.9876 9.11372 11.9976C8.14972 12.0066 7.90172 11.3706 6.59372 11.3776C5.28572 11.3846 5.01172 12.0086 4.04772 11.9996C2.96272 11.9896 2.13372 10.9266 1.51172 9.98056C-0.224276 7.33656 -0.406276 4.23456 0.664724 2.58556C1.42572 1.41256 2.62672 0.727562 3.75672 0.727562C4.90672 0.727562 5.62872 1.35756 6.57972 1.35756C7.50172 1.35756 8.06372 0.726562 9.39372 0.726562C10.3987 0.726562 11.4637 1.27356 12.2217 2.21856C9.73672 3.58156 10.1407 7.13056 12.6517 8.07956Z" fill="#24262B"/>
              </svg>
              <span className='number-type-device'>4</span>
            </p>
            <p className='p'>
              <svg className='number-type-device'width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.15806 0.0118126C3.12198 0.0183737 3.0848 0.0249348 3.05309 0.046805C2.92515 0.133193 2.89671 0.312529 2.9831 0.440469L3.58672 1.34152C2.65395 1.83579 1.95848 2.65702 1.73212 3.64227H9.46544C9.23909 2.65702 8.54361 1.83579 7.61085 1.34152L8.21446 0.440469C8.30085 0.312529 8.27242 0.133193 8.14448 0.046805C8.01544 -0.0395825 7.8372 -0.00240305 7.75081 0.125538L7.08596 1.10532C6.6245 0.936924 6.12367 0.842882 5.59878 0.842882C5.0739 0.842882 4.57307 0.936924 4.11161 1.10532L3.44675 0.125538C3.38223 0.0293088 3.26523 -0.00896413 3.15806 0.0118126ZM4.05912 2.24258C4.29094 2.24258 4.47903 2.43066 4.47903 2.66249C4.47903 2.8954 4.29094 3.0824 4.05912 3.0824C3.8262 3.0824 3.63921 2.8954 3.63921 2.66249C3.63921 2.43066 3.8262 2.24258 4.05912 2.24258ZM7.13845 2.24258C7.37137 2.24258 7.55836 2.43066 7.55836 2.66249C7.55836 2.8954 7.37137 3.0824 7.13845 3.0824C6.90662 3.0824 6.71854 2.8954 6.71854 2.66249C6.71854 2.43066 6.90662 2.24258 7.13845 2.24258ZM0.839817 4.20215C0.376168 4.20215 0 4.57832 0 5.04197V8.96112C0 9.42477 0.376168 9.80094 0.839817 9.80094C0.938234 9.80094 1.03228 9.78016 1.11976 9.74845V4.25464C1.03228 4.22293 0.938234 4.20215 0.839817 4.20215ZM1.67963 4.20215V10.3608C1.67963 10.8234 2.0569 11.2006 2.51945 11.2006H8.67811C9.14067 11.2006 9.51793 10.8234 9.51793 10.3608V4.20215H1.67963ZM10.3577 4.20215C10.2593 4.20215 10.1653 4.22293 10.0778 4.25464V9.74845C10.1653 9.77907 10.2593 9.80094 10.3577 9.80094C10.8214 9.80094 11.1976 9.42477 11.1976 8.96112V5.04197C11.1976 4.57832 10.8214 4.20215 10.3577 4.20215ZM2.79939 11.7605V12.8803C2.79939 13.4981 3.30131 14 3.91915 14C4.53698 14 5.0389 13.4981 5.0389 12.8803V11.7605H2.79939ZM6.15866 11.7605V12.8803C6.15866 13.4981 6.66058 14 7.27842 14C7.89625 14 8.39817 13.4981 8.39817 12.8803V11.7605H6.15866Z" fill="#24262B"/>
              </svg>
              <span className='number-type-device'>8</span>
            </p>
          </div>
          <div className='status-session'>
            <div className='status-session'>
              <p className='cirle pass'></p>
              <p className='text-status'>Passed</p>
            </div>
            <div className='status-session'>
              <p className='cirle issue'></p>
              <p className='text-status'>Issue Detected</p>
            </div>
          </div>
        </div>
        <div className='session-body-device'>
          <div className="grid-container">{listItems}</div>
        </div>
      </div>
    </>
  );
}


export default App;
