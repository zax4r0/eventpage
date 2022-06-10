import Head from 'next/head';

const Seo = ({ title = `event`, description = `next`, url = `/` }: any) => {
  return (
    /**
     * Well we can use next/seo
     * but fine for this
     */

    // <Head
    //   title={title}
    //   description={description}
    //   openGraph={{
    //     url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${url}`,
    //     title,
    //     description,
    //   }}
    //   {...props}
    // />
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key={url} />
    </Head>
  );
};

export default Seo;
