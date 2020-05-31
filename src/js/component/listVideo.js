import React from 'react';
import styled from 'styled-components'; 
import 'font-awesome/css/font-awesome.min.css';
import VideoDisplay from './videodisplay'
import { Row, Col} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


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

const VideoWrapper = styled.div`
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 20px 40px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(239, 239, 239);
  border-image: initial;
  border-radius: 4px;   
`

const VideoDetail = styled(Row)`
  height: 70px;
  padding: 15px;
`
const TitleDevice = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #24262B;
`
const DescriptionDevice = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: #969696;
`
const DisplayDetail = styled(Col)`
  display:flex;
  flex-direction: column;
`
const Session = styled.div`
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 20px 40px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(239, 239, 239);
    border-image: initial;
    border-radius: 4px;
    margin: 40px; 
`
const ListDevice = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
`
const SessionHeaderDevice = styled(Row)`
  z-index: 0;
  display: flex;
  align-items: center;
  padding: 17px 40px;
  border-bottom: 1px solid rgb(239, 239, 239);
  /* margin:0; */
`
const DeviceType = styled(Col)`
  z-index: 0;
  width: auto;
  box-sizing: content-box;
  font-weight: 300;
`
const SessionName =  styled(Col)`
  display: inline-block;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #24262B;
`
const AndroidIcon = styled.div`
    display:inline-block;
    margin-right: 10px;
    font-size: 22px;
    color: #BDC2D0;
`
const SessionStatus = styled(Col)`
  display:inline-block;
  display: flex;
  align-items:center;
  vertical-align: middle;
  padding-top: 20px;
`
const CirlePass = styled.p`
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-color: white;
  padding: 3px;
  border-style: solid;
  border-color: rgb(189, 194, 208);
  border-width: 1px;
  border-radius: 50%;  
  background: #6BC685;
`
const CirleIssue = styled.p`
  vertical-align: middle;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  position: relative;
  background-color: white;
  padding: 3px;
  border-style: solid;
  border-color: rgb(189, 194, 208);
  border-image: initial;
  border-width: 1px;
  border-radius: 50%;  
  background: #dc3545;
`
const TextStatus = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: #24262B;
`
const TextNumberDevice = styled.span`
  font-family: ProximaNovaReg;
  font-weight: bold;
  font-size: 12px;
  align-items: center;
  vertical-align: middle;
  padding-left: 10px;
`
const SessionBodyDevice = styled(Row)`
  height: auto;
  padding: 40px;
`
const DisplayGridVideo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
`

const ButtonStatus = (props) => {
  if(props.status==='Passed')
    return <Button variant='success' size='sm'>{props.status}</Button>
  else
   return <Button variant='danger' size='sm'>{props.status}</Button>
}

const listItems = videos.map((video, index) =>
    <VideoWrapper key={index} >

        <VideoDisplay url={video.url}/>

        <VideoDetail>
          <DisplayDetail md={6}>
            <TitleDevice>{video.title}</TitleDevice>
            <DescriptionDevice>{video.description}</DescriptionDevice>
          </DisplayDetail>
          <Col md={2}></Col>
          <Col md={3}>
            <ButtonStatus status={video.status}>{video.status}</ButtonStatus>
          </Col>
        </VideoDetail>

    </VideoWrapper>
);   

class ListVideo extends React.Component{
  render(){
    return(
      <>
      <Session>
        <ListDevice>

          <SessionHeaderDevice>
            <SessionName md={2.5}>Current Test Session</SessionName>
            <DeviceType md={2}>
              <AndroidIcon>
                <i class='fa fa-android' aria-hidden='true'></i>
                <TextNumberDevice>8</TextNumberDevice>
              </AndroidIcon>
              <AndroidIcon>
                <i class='fa fa-apple' aria-hidden='true'></i>
                <TextNumberDevice>4</TextNumberDevice>
              </AndroidIcon>
            </DeviceType>
            <Col md={5}></Col>
            <SessionStatus md={3}>
              <Row>
                <Col md={1}><CirlePass></CirlePass></Col>
                <Col md={3}><TextStatus>Passed</TextStatus></Col>
                <Col md={1}> <CirleIssue></CirleIssue></Col>
                <Col md={5}> <TextStatus>Issue Detected</TextStatus></Col>
              </Row>
            </SessionStatus>
          </SessionHeaderDevice>

          <SessionBodyDevice>
            <DisplayGridVideo>{listItems}</DisplayGridVideo>
          </SessionBodyDevice>
            
        </ListDevice>
      </Session>
      </>
    )
  }
}
export default ListVideo;








   
   