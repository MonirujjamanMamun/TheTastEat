import OurChefs from '@/components/Shard/OurChefs/OurChefs';
import PageTitle from '@/components/Shard/PageTitle/PageTitle';
import AboutUs from '@/components/Ui/AboutUs/AboutUs';

const page = () => {
  return (
    <div>
      <PageTitle title={'About us'} />
      <AboutUs />
      <OurChefs />
    </div>
  );
};

export default page;
