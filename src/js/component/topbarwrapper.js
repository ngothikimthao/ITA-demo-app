import React from 'react';
import styled from 'styled-components'; 
import 'font-awesome/css/font-awesome.min.css';
import { Row, Col } from 'reactstrap';

const HeaderWrapper = styled(Row)`
    height: 104px;
    border-bottom: 1px solid rgb(239, 239, 239);
    display:flex;
    align-items: center;
    padding: 0px 25px;
`
const NameWrapper = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #24262B;    
    padding: 20px;  
`
const SearchBar = styled.div`
    display:flex;
    height: 42px;
    font-family: Poppins;
    background-color: white;
    font-size: 12px;
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(239, 239, 239);
    align-items:center;
`
const SearchPlacehoder = styled.input`
    width: 200px;
    color: rgb(33, 34, 39);
    border-style: none;
`
const SearchIcon = styled.div`
    padding-right: 5px;
    padding-left: 10px;
    font-size: 16px;
    color: #BDC2D0;
`
const ChangeViewType =  styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 195px;
    height: 44px;
    background-color: white;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(239, 239, 239);
    border-image: initial;
    border-radius: 6px;  
`
const ViewType = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: #969696;
    width: 97px;
    text-align:center;
`
const LineViewType = styled.div`
    width: 1px;
    height: 44px;
    background-color: rgb(239, 239, 239);
`
const TopBarLeft = styled(Col)`
    display:flex;
    flex-direction:row;
    align-items:center;
`
const TopBarRight = styled(Col)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

`
class TopBarWrapper extends React.Component{
    render(){
        return(
            <>
            <HeaderWrapper >

                <TopBarLeft md={5}>
                    <NameWrapper> <p>Inteligent Test Automation</p></NameWrapper>
                    <SearchBar >
                        <SearchIcon>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </SearchIcon>
                        <SearchPlacehoder placeholder="Platform, Device Name, or UDID"></SearchPlacehoder>
                    </SearchBar>
                </TopBarLeft>

                <Col md={5}></Col>
            
                <TopBarRight md={2}>
                    <ChangeViewType>
                        <ViewType>List View</ViewType>
                        <LineViewType></LineViewType>
                        <ViewType>Card View</ViewType>
                    </ChangeViewType>
                </TopBarRight>

            </HeaderWrapper>
            </>
        )
    }
}
export default TopBarWrapper;

