import 'styles/App.css';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import BaseLayout from 'components/layout/BaseLayout';

import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Product from 'components/pages/Product';
import Contact from 'components/pages/Contact';

function App() {
    return (
        <Router>
            <BaseLayout>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Home />}
                    />
                    <Route
                        exact
                        path="/product"
                        render={() => <Product />}
                    />
                    <Route
                        exact
                        path="/about"
                        render={() => <About />}
                    />
                    <Route
                        exact
                        path="/contact"
                        render={() => <Contact />}
                    />
                </Switch>
            </BaseLayout>
        </Router>
    );
}

export default App;
