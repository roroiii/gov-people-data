import Head from 'next/head';

interface SEO {
  title: string;
  keywords: string;
  description: string;
}

function Meta({ title, keywords, description }: SEO) {
  const titleText = `${title} - TAIWAN`;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{titleText}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

Meta.defaultProps = {
  title: '戶數、人口數按戶別及性別統計',
  keywords: '公共資訊',
  description: '戶數、人口數按戶別及性別統計',
};

export default Meta;
