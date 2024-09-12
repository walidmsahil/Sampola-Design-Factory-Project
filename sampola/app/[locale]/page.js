import Head from 'next/head';
import Carousel from '@/components/Carousel'

export default async function Home({ params }) {
  const { locale } = params; // 从 params 中解构 locale
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // 服务器端获取数据
  const res = await fetch(`${apiUrl}/api/home-page?populate[banner]=*&populate[banners_slides]=*&locale=${locale}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return (
      <div>
        <h1>无法加载内容，请稍后重试。</h1>
      </div>
    );
  }

  const homepageData = await res.json();

  const banner = homepageData?.data?.attributes?.banner?.data?.attributes?.url;
  // const banners_slides = homepageData?.data?.attributes?.banners_slides?.data; // 获取所有 slides 数据
  const bannerCaption = homepageData?.data?.attributes?.banner?.data?.attributes?.caption;
  const title = homepageData?.data?.attributes?.title;
  const description = homepageData?.data?.attributes?.description;

  if (!banner || !title || !description) {
    return <div>加载中...</div>;
  }

  return (
    <>
      {/* 动态设置 SEO */}
      <Head>
        <title>{title} - Sampola</title>
        <meta name="description" content={description} />
      </Head>
      
      {/* <Carousel slides={banners_slides} /> */}

      <div className="mt-14">
        <section className="bg-cover">
          <img src={`http://localhost:1337${banner}`} alt={bannerCaption || title} />
          <div className="text-center py-20">
            <h1 className="text-5xl font-bold text-[#4a5c4d] mb-4">{title}</h1>
            <p className="text-lg text-[#4a5c4d] mb-8">{description}</p>
            <a href="#about" className="bg-[#4a5c4d] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#4a5c4d] transition">
              了解更多
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-[#4a5c4d] mb-6">关于我们</h2>
            <p className="text-lg text-[#4a5c4d]">
              Sampola 是一个专注于提供本地优质商品的在线平台，帮助社区建立更紧密的联系。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
