import Link from 'next/link';

import './styles.scss';

const Index = ({ title, children }) => (
  <main className="root">
    <nav className="navbar">
      <span>Welcome, <strong>Guest</strong></span>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <button>Logout</button>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </nav>

    <h1>{title}</h1>
    {children}

  </main>
);

export default Index;