import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import TopNavbarWithRouter from './components/TopNavbar';
import useEndpoint from './components/useEndpoint';
import Home from './pages/Home';

function MainApp() {
  const { data } = useEndpoint('routes');

  if (!data) return <FallbackSpinner />;

  return (
    <div>
      <TopNavbarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {data.map((route) => {
              const SectionComponent = React.lazy(() => import('./pages/' + route.component));
              return (
                <Route
                  exact
                  key={route.headerTitle}
                  path={route.path}
                  component={() => (
                    <SectionComponent />
                  )}
                />
              );
            })}
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
