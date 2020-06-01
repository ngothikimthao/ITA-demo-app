import React from 'react';
import avata from '../../img/avata.jpg';
import styled from 'styled-components'; 
import { Row, Col } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../../img/logo.png';


const Select = styled.select`
    position: absolute;
    width: 113px;
    height: 34px;
    left: 132px;
    top: 33px;  
    background: #F7F8FC;
    border-radius: 5px;
    option {
        color: black;
        background: white;
        font-weight: small;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
      }
`
const Avata = styled.img`
    border-radius: 50%;
    position: absolute;
    width: 47.85px;
    height: 47.85px;
    top: 23px;
`
const Username = styled.p`
    margin-left:25%;
    position: absolute;
    top: 28px;  
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #24262B;
`
const AccoutSetting = styled.p`
    margin-left:25%;
    position: absolute;
    height: 16px;
    top: 50px;  
    font-family: Poppins;
    font-style: normal; 
    font-weight: 500;
    font-size: 12px;
    line-height: 16px; 
    letter-spacing: 0.1px;
    color: #BDC2D0;
`
const UserGuide = styled.span`
    width: 46px;
    height: 46px;
    border: 1px solid #EFEFEF;
    box-sizing: border-box;
    border-radius: 50px;
    padding:13px;
    margin-left:20px;
`
const ButtonList = styled(Col)`
    display:flex;
    flex-direction:row;
    top: 23px;
`  
const SettingMenu = styled(Col) `
    border-left: 1px solid rgb(239, 239, 239);
`
const NavBar = styled(Row)`
    display:flex;
    height:92px;
    border-bottom: 1px solid rgb(239, 239, 239);
`
const Img = styled.img`
    position: absolute;
    top: 33px;  
    margin-left: 25px;
`
class Navbar extends React.Component{
    render(){
        return(   
            <>
                <NavBar>
                    <Col md={3}>
                        <Img src={logo} alt='Logo'></Img>
                        <Select>
                            <option value="ITA Demo">ITA Demo</option>
                        </Select>
                    </Col>
                    <Col md={5}></Col>
                    <ButtonList md={2}>
                        <UserGuide>
                            <i className="fa fa-map-o"></i>            
                        </UserGuide>
                        <UserGuide>
                            <i className="fa fa-share-alt"></i>
                        </UserGuide>
                        <UserGuide>
                        <i className="fa fa-bell-o"></i>
                        </UserGuide>
                    </ButtonList>
                    <SettingMenu md={2}> 
                        <Avata src={avata} alt='Avata'></Avata>
                        <Username>Kolbytold</Username>
                        <AccoutSetting>Account Setting</AccoutSetting>
                    </SettingMenu>
                </NavBar>       
            </>
                 
        )
    }
}
export default Navbar;