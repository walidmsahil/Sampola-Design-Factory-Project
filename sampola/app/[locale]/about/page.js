export default async function About({ params: { locale } }) {

  return (
    <div className="container mx-auto mt-10">
      {/* 标题 */}
      <h1 className="text-4xl font-bold mb-6">关于Sampola</h1>

      {/* 简介 */}
      <p className="text-lg leading-relaxed mb-6">
        <strong>Sampola</strong> 是一家非营利组织，自1960年代成立以来，始终致力于为有特殊需求的群体提供个性化的工作支持和社区服务。
        我们相信，每个人都应拥有通过工作提升生活质量的机会。作为一个社会责任企业，我们的使命不仅是为个人创造工作机会，
        还通过环保项目和企业合作，为社会带来积极的改变。
      </p>
      <p className="text-lg leading-relaxed mb-6">
        在Sampola，我们与社区、企业和政府密切合作，为残疾人和弱势群体提供多样化的工作机会与支持，帮助他们融入社会、提升自信心。
        通过我们独特的工作模式和创新的循环利用项目，我们不仅为企业节省成本，也为环境可持续发展贡献力量。我们的目标是成为企业信赖的合作伙伴，
        同时为社会注入更多的包容和关怀。
      </p>

      {/* 历史与发展部分 */}
      <h2 className="text-3xl font-semibold mb-4">我们的历史</h2>

      <p className="text-lg leading-relaxed mb-6">
        Sampola自1960年代成立以来，一直致力于为有特殊需求的群体提供工作支持和社会包容。
        我们的工作中心最初只是一个小型社区项目，如今已经发展成为拥有70多名员工的综合性工作中心。
        通过与社区、企业及政府的紧密合作，我们持续推动社会责任项目的发展，帮助无数个体实现了自我价值，并为企业提供高质量的外包服务。
      </p>

      {/* 时间轴 */}
      <div className="timeline mb-10">
        <div className="mb-4">
          <h3 className="text-xl font-bold">1960年</h3>
          <p>Sampola工作中心成立，开始为残疾人和弱势群体提供工作机会和支持服务。</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">1990年</h3>
          <p>Sampola扩大了服务范围，与本地企业建立了长期合作关系，提供包装、分拣和装配等外包服务。</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">2020年</h3>
          <p>Sampola成功启动环保项目，利用废弃广告材料生产环保产品，得到了合作伙伴和社区的广泛好评。</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">2024年及以后</h3>
          <p>我们将继续创新发展，通过创造更多的工作机会和环保项目，推动社会包容和可持续发展。</p>
        </div>
      </div>

      {/* 图片占位符 */}
      <div className="mb-6">
        <img src="https://dummyimage.com/800x400/cccccc/ffffff" alt="历史图片占位符" className="w-full h-auto" />
      </div>
    </div>
  );
}
