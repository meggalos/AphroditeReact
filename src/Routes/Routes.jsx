import React from 'react'
import { Switch, Route} from 'react-router';
import landingPage from '../Pages/LandingPage/landingPage';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={landingPage} />
        </Switch>
    )
}

export default Routes
