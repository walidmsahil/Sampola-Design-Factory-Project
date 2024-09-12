import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Calendar, Users, Leaf, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-green-light min-h-screen">
      <header className="bg-green-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">关于Sampola</h1>
        <p className="max-w-2xl mx-auto text-lg">
        Sampola成立于1960年代，是一家致力于为有特殊需求人群提供就业机会和社会支持的非营利组织。我们通过工作机会、社区支持和环保项目，帮助个人融入社会，增强他们的自信心和生活的意义。作为一个社会责任企业，我们的目标是通过真实的工作与合作为社会创造积极的影响。
        </p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <h2 className="text-center text-3xl font-bold mb-6 text-green-dark">我们的历史</h2>
          <p className="mb-8 text-lg">
          Sampola自成立以来，一直秉持着为残疾人和弱势群体创造就业机会的初衷。自1960年代以来，我们从一个小型社区项目发展到如今的一个有70名员工的工作中心。通过与企业和政府的紧密合作，我们在过去的几十年中帮助无数个体实现了自我价值，也为企业提供了高质量的外包服务。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: 1960, event: 'Sampola工作中心成立，服务于当地社区的残疾人和弱势群体。' },
              { year: 1990, event: 'Sampola扩大服务范围，与本地企业建立合作，为它们提供分拣和包装服务。' },
              { year: 2020, event: 'Sampola成功启动环保项目，利用废旧广告材料生产环保产品，受到广泛好评。' },
              { year: 2024, event: '我们继续致力于创新和发展，帮助更多企业和个人，实现更大的社会价值。' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Calendar className="w-10 h-10 text-green-dark mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.year}</h3>
                <p>{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-center text-3xl font-bold mb-6 text-green-dark">我们的愿景与使命</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">愿景</h3>
            <p className="mb-6 text-lg">
              创造一个包容的社会，在这里每个人都有平等的机会通过工作提升生活的质量。
            </p>
            <h3 className="text-2xl font-semibold mb-4">使命</h3>
            <p className="text-lg">
              为有特殊需求的人群提供支持，通过工作机会、培训和环保项目，帮助他们融入社会并实现自我价值。我们通过与企业和政府的紧密合作，推动社会责任项目的发展，同时为社会和环境做出积极贡献。
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-center text-3xl font-bold mb-6 text-green-dark">我们的核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Users, title: '个性化支持', description: '我们关注每个人的独特需求，提供个性化的工作支持和社区服务。' },
              { icon: Heart, title: '社会责任', description: '作为一个非营利组织，我们努力通过每一项工作项目和合作提升社会责任感。' },
              { icon: Leaf, title: '环保与可持续发展', description: '通过创新的循环利用项目，我们致力于为环保事业贡献力量。' },
              { icon: ChevronRight, title: '承诺与信任', description: '我们坚持兑现承诺，确保所有合作伙伴和服务对象都能信任我们的服务质量和社会影响。' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <item.icon className="w-10 h-10 text-green-dark mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-center text-3xl font-bold mb-6 text-green-dark">我们的团队与合作伙伴</h2>
          <p className="mb-8 text-lg">
            Sampola由一支充满热情的团队领导，他们不仅在帮助有特殊需求人群方面有丰富的经验，也深知如何与企业和政府合作，推动社会责任项目的发展。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: '张三', role: '执行总监', image: '/images/photo_02.png' },
              { name: '李四', role: '项目经理', image: '/images/photo_01.png' },
              { name: '王五', role: '社区关系主管', image: '/images/photo_03.png' },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-green-dark">{member.role}</p>
              </div>
            ))}
          </div>
          <h3 className="text-center text-3xl font-semibold mb-4">合作伙伴</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[{name:'Fiskars',img:'logo.svg'}, {name:'Hansaprint',img:'hansaprint.png'}, {name:'Tammer Brands',img:'tammer-brands-logo.png'}].map((partner, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
                <Image src={`/images/${partner.img}`} alt={partner.name} width={200} height={100} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-green-dark">成功故事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sampola帮助残疾青年融入工作社区</h3>
              <p>
                小明是一位患有轻度自闭症的青年。通过Sampola的支持，他在我们的工作中心找到了一份包装工作。在这里，小明不仅学会了新的技能，还结识了许多朋友，大大提升了他的自信心和社交能力。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">与Fiskars合作推动环保包装项目</h3>
              <p>
                我们与Fiskars公司合作，为他们的园艺工具开发了一套环保包装解决方案。这个项目不仅为我们的员工创造了新的工作机会，还大大减少了包装材料的使用，获得了客户和环保组织的一致好评。
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-dark">想了解更多？</h2>
          <p className="mb-8 text-lg">
            想进一步了解Sampola的服务或合作机会？请随时联系我们，加入我们的社会责任事业，为残疾人群和弱势群体创造更多的就业机会，同时推动环保和可持续发展。
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-green-dark text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              联系我们
            </Link>
            <Link href="/services" className="bg-white text-green-dark px-6 py-3 rounded-lg border border-green-dark hover:bg-green-100 transition duration-300">
              合作机会
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}