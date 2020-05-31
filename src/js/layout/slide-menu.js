import React from 'react';
import styled from 'styled-components'; 
import 'font-awesome/css/font-awesome.min.css';


const SlideMenuWrapper = styled.div`
    width: 98px;
    height: calc(100vh - 152px);
    z-index: 1;
    border-right: 1px solid rgb(239, 239, 239);
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) 0s;
    height: 1257px;
    background: #FFFFFF;
`
const TabIcon = styled.div`
    margin-left: 50px;
    font-size: 22px;
    color: #BDC2D0;
    padding-top: 50px;
`

class SlideMenu extends React.Component{
    render(){
        return(
            <>
            <SlideMenuWrapper>
                <TabIcon>
                    <i className="fa fa-square-o"></i>
                </TabIcon>
                <TabIcon>
                    <i className="fa fa-clock-o"></i>
                </TabIcon>
                <TabIcon>
                    <i className="fa fa-th-large" ></i>
                </TabIcon>
            </SlideMenuWrapper>
            </>
        )
    }
}
export default SlideMenu;





