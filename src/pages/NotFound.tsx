import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound = () => (
  <Layout>
    <section className="py-12">
      <p className="text-sm font-semibold text-blue-700 mb-2">404</p>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">Page not found</h1>
      <p className="text-gray-600 mb-5">The page you are looking for could not be found.</p>
      <Link to="/" className="text-sm font-semibold text-blue-700 hover:underline">Back to home</Link>
    </section>
  </Layout>
);

export default NotFound;
