import type { NextPageWithLayout } from '@/types';
import { ErrorIcon } from '@/components/ui/icons/error-icon';
import Layout from '@/layout';
import { HomeIcon } from '@/components/ui/icons/home-icon';
import AnchorLink from '@/components/ui/links/anchor-link';
import routes from '@/config/routes';
import Seo from '@/layout/_seo';
const ErrorPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="404 Error" description="Something went wrong" url="/404" />
      <div className="flex h-full items-center justify-center p-4 md:p-6 xl:p-8">
        <div className="max-w-md text-center xl:max-w-lg">
          <ErrorIcon className="mx-auto h-36 w-36 text-white dark:text-white" />
          <h2 className="pt-5 text-base font-semibold text-white dark:text-white md:pt-7">
            No page found
          </h2>
          <p className="pt-2.5 text-white">The page you were looking for isn&apos;t here</p>
          <AnchorLink
            href={routes?.home}
            className="
            group mx-auto mt-7 inline-flex items-center gap-2 rounded border border-light-400
            px-6 py-3.5 font-semibold text-white transition-all hover:bg-light-400 hover:text-brand-dark
            dark:border-gray-400 dark:text-light dark:hover:bg-gray-700 dark:focus:bg-gray-700 md:mt-9"
          >
            <HomeIcon className="h-[18px] w-[18px] text-white group-hover:text-brand dark:text-green-400" />
            {` `}
            Back to home
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

ErrorPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ErrorPage;
