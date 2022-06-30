import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Fragment } from 'react';
import { publicRoutes } from '~/configs/RouterConfig';
import { DefaultLayout } from './layouts/Layouts';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, i) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
