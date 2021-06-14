import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPage from './pages/ChatPage.jsx';
import AuthPage from './pages/components/auth/AuthPage.jsx'

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/ChatPage" exact>
                    <ChatPage />
                </Route>
                <Redirect to="/ChatPage" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
        </Switch>
    )

}

export default useRoutes;