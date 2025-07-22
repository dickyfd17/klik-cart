import TopBar from '@/components/TopBar';
import NavBar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Deals from '@/components/Deals';
import Categories from '@/components/Categories';
import Brands from '@/components/Brands';
import DailyEssentials from '@/components/DailyEssentials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Banner />
      <Deals />
      <Categories />
      <Brands />
      <DailyEssentials />
      <Footer />
    </>
  );
}
