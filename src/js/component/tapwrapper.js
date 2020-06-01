import React from 'react';
import styled from 'styled-components'; 
import 'font-awesome/css/font-awesome.min.css';
import { Row} from 'reactstrap';

const TabSession = styled(Row)`
    height: 72px;
    border-bottom: 1px solid rgb(239, 239, 239);
    display: flex;
    padding: 0px 40px;
`
const Tab = styled.div`
    display: flex;
    color: rgb(189, 194, 208);
    height: calc(100% - 5px);
    margin-right: 60px;
    font-family: Poppins;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
`
const FavoriteIcon = styled.div`
    margin-right: 10px;
    font-size: 22px;
    color: #BDC2D0;
`
const TabChoosed = styled.div`
    display: flex;
    color: rgb(141, 103, 251);
    height: calc(100% - 5px);
    font-family: Poppins;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    border-bottom: 5px solid rgb(141, 103, 251);
`
class TabWrapper extends React.Component{
    render(){
        return(
            <>
            <TabSession>
                <Tab>
                    <FavoriteIcon>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </FavoriteIcon>
                    FAVORITE
                </Tab>
                <Tab>
                    <TabChoosed>
                        CURRENT TEST SESIONS 
                    </TabChoosed>
                 </Tab>
                <Tab> SCHEDULED TEST SESIONS </Tab>
            </TabSession>
            </>
        )
    }
}
export default TabWrapper;
