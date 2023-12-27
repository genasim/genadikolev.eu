/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React, { Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import TopNavbarWithRouter from './components/TopNavbar';
import useEndpoint from './components/useEndpoint';
import Home from './pages/Home';
import BottomNavbarWithRouter from './components/BottomNavBar';

function MainApp() {
  const { data } = useEndpoint('routes');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 580);
  }, [setIsMobile, window.innerWidth]);

  if (!data) return <FallbackSpinner />;

  return (
    <>
      {isMobile ? <BottomNavbarWithRouter /> : <TopNavbarWithRouter />}
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {data.map((route) => {
              const SectionComponent = React.lazy(() =>
                import('./pages/' + route.component),
              );
              return (
                <Route
                  exact
                  key={route.headerTitle}
                  path={route.path}
                  component={() => <SectionComponent />}
                />
              );
            })}
          </Suspense>
        </Switch>
      </main>
    </>
  );
}

export default MainApp;
