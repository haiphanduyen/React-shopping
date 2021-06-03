import React from 'react'
import { Route, Switch } from 'react-router'
import { RoutePath } from '../../Commons/Constansts/RoutePath'
import Aboutus from '../../Pages/AboutUsPage'

const AboutRouter = () => {
    return (
        <Switch>
           <Route exact path ={RoutePath.About} component={Aboutus}/>
       </Switch>
        )
}

export default AboutRouter
