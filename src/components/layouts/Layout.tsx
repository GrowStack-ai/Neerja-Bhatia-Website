import HeaderHeroWrapper from '../sections/HeaderHeroWrapper';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      <HeaderHeroWrapper/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;