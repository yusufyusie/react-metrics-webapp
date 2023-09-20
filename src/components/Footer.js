import { Link } from 'react-router-dom';
import styles from '../styles/Footer.css';

const Footer = () => (
  <div className={styles.footer}>
    <p>© 2023 Game of Thrones Characters</p>
    <div className={styles.contacts}>
      <p>
        <a href="#/">Send a message</a>
        <Link to="/about">About</Link>
      </p>
    </div>
  </div>
);

export default Footer;