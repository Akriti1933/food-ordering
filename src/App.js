import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-loading-skeleton/dist/skeleton.css";
import PrivateRoute from "./Routes/PrivateRoutes";
import Layout from "./Dashboard/Layout/Layout";

function App() {
  return (
    <Layout>
      <PrivateRoute />
    </Layout>
  );
}

export default App;
