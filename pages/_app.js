import { Provider } from "react-redux";
import "@/styles/globals.css";
import { Layout } from "@/components";
import store from "@/store/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </>
  );
}

export default MyApp;
