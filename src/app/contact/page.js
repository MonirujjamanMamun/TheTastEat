import PageTitle from '@/components/Shard/PageTitle/PageTitle';
import MailUs from '@/components/Ui/MailUs/MailUs';
import OurBranches from '@/components/Ui/OurBranches/OurBranches';

const page = () => {
  return (
    <div>
      <PageTitle title={'Contact Us'} />
      <MailUs />
      <OurBranches />
    </div>
  );
};

export default page;
