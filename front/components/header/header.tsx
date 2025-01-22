import Link from 'next/link';
import { Button } from '../ui/button';
import { routing } from './constants';

const Header = () => {
  return (
    <header className="h-header-height border border-b">
      <nav className="container">
        <ul className="flex items-center gap-3">
          {routing.map(route => (
            <li key={route.href}>
              <Button asChild variant="link">
                <Link href={route.href}>{route.title}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
