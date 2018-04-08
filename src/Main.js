import React from 'react';
import { Switch, Route, Redirect } from "react-router";
import Articles from "./containers/Articles";
import Article from "./containers/Article";
import NewArticle from "./containers/NewArticle";
import GlobalArticles from "./containers/GlobalArticles";
import Profile from "./containers/Profile";
import Settings from "./containers/Settings";
import UserArticles from "./containers/UserArticles";

export default () => {
  return (
    <main>
        <Switch>
            <Route exact path='/' render={() => <Redirect to="/articles"/>} />
            <Route path='/articles' component={Articles} />
            <Route path='/new-article' components={NewArticle} />
            <Route path='/settings' components={Settings} />
            <Route path='/profile' components={Profile} />
            <Route path="/articles/:username" component={UserArticles}/>
            <Route path="/articles/global" component={GlobalArticles}/>
            <Route path="/article/:articleId" component={Article}/>
        </Switch>
    </main>
  )
}