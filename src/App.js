import React from 'react';
import Layout from './components/layout/layout.component'
import BurgerBuilder from './containers/burger-builder/burger-builder.component'
function App() {
  return (
    <div >
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}
export default App;
