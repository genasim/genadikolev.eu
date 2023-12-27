import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import useEndpoint from './components/useEndpoint';
import Home from './pages/Home';

function MainApp() {
  const { data } = useEndpoint('routes');

  if (!data) return <FallbackSpinner />;

  return (
    <div>
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {data.sections.map((route) => {
              const SectionComponent = React.lazy(() => import('./pages/' + route.component));
              return (
                <Route
                  key={route.headerTitle}
                  path={route.path}
                  component={() => (
                    <SectionComponent header={route.headerTitle} />
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
