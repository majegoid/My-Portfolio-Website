import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faCube,
  faDatabase,
  faExternalLinkAlt,
  faEye,
  faEyeSlash,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(
  faEye,
  faEyeSlash,
  faGlobe,
  faBars,
  faGithub,
  faReact,
  faCss3,
  faHtml5,
  faJs,
  faCube,
  faExternalLinkAlt,
  faDatabase
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
