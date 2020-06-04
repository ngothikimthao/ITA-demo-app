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
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.082 2.61328L19.3663 7.8975" stroke="#BDC2D0" stroke-width="1.35667" stroke-miterlimit="10"/>
                        <path d="M11.9398 3.7326C8.85339 2.6147 5.6313 3.28286 2.91797 6.87261L5.74255 9.70397" stroke="#BDC2D0" stroke-width="1.35667" stroke-miterlimit="10"/>
                        <path d="M12.2969 16.2559L15.1282 19.0804C18.718 16.3671 19.3861 13.145 18.2682 10.0586" stroke="#BDC2D0" stroke-width="1.35667" stroke-miterlimit="10"/>
                        <path d="M9.70011 17.725L4.27344 12.2983C4.27344 12.2983 8.67786 1.64306 20.9984 1C20.3018 13.2677 9.70011 17.725 9.70011 17.725Z" stroke="#BDC2D0" stroke-width="1.35667" stroke-miterlimit="10" stroke-linecap="square"/>
                        <path d="M12.7544 10.9425C13.691 10.9425 14.4503 10.1832 14.4503 9.24662C14.4503 8.31003 13.691 7.55078 12.7544 7.55078C11.8178 7.55078 11.0586 8.31003 11.0586 9.24662C11.0586 10.1832 11.8178 10.9425 12.7544 10.9425Z" stroke="#BDC2D0" stroke-width="1.35667" stroke-miterlimit="10" stroke-linecap="square"/>
                        <path d="M2.15792 16.9658C2.54172 16.5951 3.05577 16.39 3.58934 16.3946C4.12291 16.3992 4.63331 16.6133 5.01062 16.9906C5.38793 17.3679 5.60194 17.8783 5.60658 18.4119C5.61122 18.9454 5.4061 19.4595 5.03541 19.8433C4.24108 20.6383 1 21.0012 1 21.0012C1 21.0012 1.36291 17.7601 2.15792 16.9658Z" stroke="#BDC2D0" stroke-width="1.35667" stroke-miterlimit="10" stroke-linecap="square"/>
                    </svg>
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





