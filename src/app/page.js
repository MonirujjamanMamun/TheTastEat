import Banar from '@/components/Ui/Banar/Banar';
import Blog from '@/components/Ui/Blog/Blog';
import Button from '@/components/Ui/Button/Button';
import Intro from '@/components/Ui/Intro/Intro';
import Menu from '@/components/Ui/Menu/Menu';
import OurOffer from '@/components/Ui/OurOffer/OurOffer';
import OurService from '@/components/Ui/OurService/OurService';
import PopularDish from '@/components/Ui/PopularDish/PopularDish';
import Reservation from '@/components/Ui/Reservation/Reservation';
import Store from '@/components/Ui/Store/Store';
import Testimonial from '@/components/Ui/Testimonial/Testimonial';

export default function Home() {
  return (
    <main>
      <Banar />
      <Intro />
      <Store />
      <Menu />
      <Testimonial />
      <div class="home-parallax-section"></div>
      <OurOffer />
      <PopularDish />
      <OurService />
      <Blog />
      <Reservation />
    </main>
  );
}
