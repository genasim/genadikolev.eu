/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React, { Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomNavbarWithRouter from './components/BottomNavBar';
import FallbackSpinner from './components/FallbackSpinner';
import TopNavbarWithRouter from './components/TopNavbar';
import useEndpoint from './components/useEndpoint';

function MainApp() {
  const data = useEndpoint('routes');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 580);
  }, [setIsMobile, window.innerWidth]);

  if (!data) return <FallbackSpinner />;

  return (
    <>
      {!isMobile && <TopNavbarWithRouter />}
      <Switch>
        <Suspense fallback={<FallbackSpinner />}>
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
      {isMobile && <BottomNavbarWithRouter />}
    </>
  );
}

export default MainApp;
