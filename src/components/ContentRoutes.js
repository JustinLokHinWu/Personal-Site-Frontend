import { React } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home';
import { ActganInfo, PersonalSiteInfo } from './ArticleInfo'
import PersonalSiteArticle from './Articles/PersonalSiteArticle';
import ActganArticle from './Articles/ActganArticle';
import { actganBackendURL } from './ApiClient'
import MissingPage from './MissingPage';
import Page from './Page';
import { AnimatePresence } from 'framer-motion'

const routes = [
	{ path: '/demos/actgan', name: 'Actgan',
		component:
		<ActganArticle
		info={ActganInfo}
		backendURL={actganBackendURL} />},
	{ path: '/articles/personal-site', name: 'Personal Site',
		component:
		<PersonalSiteArticle
			info={PersonalSiteInfo}/>},
	{ path: '*', name: 'Not Found',
		component:
		<MissingPage />}
]

const ContentRoutes = () => {
	const location = useLocation()

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route key={location.key} exact path={'/'} element={
					<Page>
						<Home />
					</Page>} />
				{routes.map(({ path, component }) => (
					<Route
					key={location.key}
					exact path={path}
					element={
					<Page initial='outRight' exit={'outRight'}>{component}</Page>}/>
				))}
			</Routes>
		</AnimatePresence>
	)
}

export default ContentRoutes