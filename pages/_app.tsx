import '../styles/globals.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseClient from '../firebase/client';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(firebaseClient.auth());

  return (
    <Layout currentUser={user} loading={loading}>
      <Component {...pageProps} currentUser={user} />
    </Layout>
  );
}

export default MyApp;
