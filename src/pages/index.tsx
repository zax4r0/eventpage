import Map from '@/components/Map';
import Slides from '@/components/Slides';
import { EevntTime } from '../components/EevntTime';
import EventName from '@/components/EventName';
import Banner from '@/components/Banner';
import EventDetails from '@/components/EventDetails';
import Organiser from '@/components/Organiser';
import { NextPageWithLayout } from '@/types';
import Layout from '@/layout';
import Seo from '@/layout/_seo';
import useWindowSize, { Size } from '@/lib/hooks/useWindowSizw';

const Home: NextPageWithLayout = () => {
  const size: Size = useWindowSize();

  return (
    <>
      <Seo title="Event" description="We Plan Event YEy" url="/" />
      <div className="flex flex-col  ">
        <Banner />
        <EventName />
        <EventDetails />
        {/* Date and time ends */}
        <div className="grid grid-cols-1 gap-x-14 gap-y-14 lg:grid-cols-2 lg:mt-[17px] mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mx-[auto] w-[75%]">
          <Map />
          <Organiser>{size.width && size.width > 415 ? <EevntTime /> : null}</Organiser>
        </div>
        <Slides></Slides>
        <>
          {size.width && size.width <= 415 ? (
            <div className="p-9">
              <EevntTime />
            </div>
          ) : null}
        </>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
