import store from 'store';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import Layout from 'components/Layout';
import 'assets/global.scss';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
