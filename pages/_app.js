import "../scss/global.scss";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
}
