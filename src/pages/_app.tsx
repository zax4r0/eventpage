import '@/styles/global.css';
import '@/styles/font.css';
import { AppPropsWithLayout } from '@/types';

function EventApp({ Component, pageProps }: AppPropsWithLayout) {
  //
  const getLayout = Component.getLayout ?? ((page) => page);
  //
  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default EventApp;
