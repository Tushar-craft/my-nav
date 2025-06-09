import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    if (search.trim()) {
      router.push(`/weather?location=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <Link href="/">
          <img src="/faveron.svg" alt="Craftisque Logo" className={styles.logoIcon} />
        </Link>
      </div>

      {/* Search Section */}
      <form className={styles.searchSection} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Weather..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <FiSearch className={styles.searchIcon} />
        </button>
      </form>

      {/* Icons Section */}
      <div className={styles.iconSection}>
        <Link href="/login" className={styles.iconLink}>
          <FiUser className={styles.icon} />
          <span>Login</span>
        </Link>
        <Link href="/cart" className={styles.iconLink}>
          <FiShoppingCart className={styles.icon} />
          <span>Cart</span>
          <span className={styles.cartCount}>0</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
