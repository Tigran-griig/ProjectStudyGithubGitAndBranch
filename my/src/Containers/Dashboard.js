import React, {useEffect} from 'react';
import {TransitionsModal} from "../Components";
import {Route} from 'react-router-dom'
import Header from "./Header";
import {connect} from "react-redux";
import {avatarActions, userActions} from "../redux/actions";
import AboutMe from "./AboutMe";
import AddProduct from "./AddProduct";

import ForAllContainer from "./ForAllCont";
import HistoryProduct from './HistoryProduct'

const Dashboard = ({fetchUserData,user,fetchAvatar}) => {
    useEffect(()=>{

        fetchAvatar()
    },[])

       useEffect(()=>{
               fetchUserData()
    },[user===null])
    return (
<div>
   <Header
         fullname={user?user.fullname:''}

   >
       <Route path={'/ads'} component={AddProduct} />
            <Route path={'/ownpage'} component={AboutMe} />
            <Route path={'/exit'} component={TransitionsModal} />
            <Route path={'/home'} component={ForAllContainer} />
            <Route path={'/history'} component={HistoryProduct} />

   </Header>
        </div>
    );
};

export default connect(({user})=>
    ({user:user.data})
    ,{...userActions,...avatarActions})(Dashboard);