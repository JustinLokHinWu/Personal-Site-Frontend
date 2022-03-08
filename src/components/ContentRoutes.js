import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home';
import { ActganInfo, PersonalSiteInfo } from './ArticleInfo'
import PersonalSiteArticle from './Articles/PersonalSiteArticle';
import ActganArticle from './Articles/ActganArticle';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const routes = [
  { path: '/', name: 'Home',
    component:
      <Home />},
  { path: '/demos/actgan', name: 'Actgan',
    component:
    <ActganArticle
      info={ActganInfo}
      backendURL='http://localhost:8000/actgan' />},
  { path: '/articles/personal-site', name: 'Personal Site',
    component:
      <PersonalSiteArticle
        info={PersonalSiteInfo}/>}
]

const ContentRoutes = () => {
  const location = useLocation()
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames='fade' timeout={300}>
        <Routes location={location}>
          {routes.map(({ path, component }) => (
            <Route key={path} exact path={path} element={component}/>
            ))}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default ContentRoutes