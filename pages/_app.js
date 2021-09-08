import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faEye, faEyeSlash, faGlobe, faBars } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faReact, faCss3 } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
library.add(faEye, faEyeSlash, faGlobe, faBars, faGithub, faReact, faCss3);

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
{
  /*
  <FontAwesomeIcon icon={fasCoffee} />
  <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
  */
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
