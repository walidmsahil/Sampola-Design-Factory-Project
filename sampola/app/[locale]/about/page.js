'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Separator } from "@/components/ui/separator"
import Faq from '@/components/Faq'
import Carousel from '@/components/Carousel/Carousel'
// 动态导入 motion.div
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
export default function Component() {
  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-5xl font-bold text-green mb-4 text-center p-6">About Us</h1>
      <div className="flex w-full justify-center">
        <Separator className="my-10 h-[2px] w-[95%] bg-green justify-center " />
      </div>
      {/* Tabs and Tab List */}
      <Tabs defaultValue="sampola" className="mb-12">
        <TabsList className="flex w-full justify-between bg-transparent flex-wrap">
          <TabsTrigger
            value="sampola"
            className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-green-dark flex-grow data-[state=active]:border-green-dark hover:text-green-dark data-[state=active]:text-green-dark"
          >
            Our Mission
          </TabsTrigger>
          <Separator className="bg-[#becfc1]" orientation="vertical" />
          <TabsTrigger value="services" className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-green-dark flex-grow data-[state=active]:border-green-dark hover:text-green-dark data-[state=active]:text-green-dark">
            Core Services
          </TabsTrigger>
          <Separator className="bg-[#becfc1]" orientation="vertical" />
          <TabsTrigger value="partners" className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-green-dark flex-grow data-[state=active]:border-green-dark hover:text-green-dark data-[state=active]:text-green-dark">
            Partners
          </TabsTrigger>
          <Separator className="bg-[#becfc1]" orientation="vertical" />
          <TabsTrigger value="impact" className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-green-dark flex-grow data-[state=active]:border-green-dark hover:text-green-dark data-[state=active]:text-green-dark">
            Social Impact
          </TabsTrigger>
          <Separator className="bg-[#becfc1]" orientation="vertical" />
          <TabsTrigger value="about" className="font-bold md:data-[state=active]:border-b-4 md:hover:border-b-4 hover:border-green-dark flex-grow data-[state=active]:border-green-dark hover:text-green-dark data-[state=active]:text-green-dark">
            Our Story
          </TabsTrigger>
        </TabsList>

        {/* Mission and Vision Section with Transition */}
        <TabsContent value="sampola" className="mb-16  bg-[#f3f2e9] p-6">

          <div className="mb-16 bg-[#f3f2e9] ">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }} // 初始状态
              animate={{ opacity: 1, x: 0 }}    // 动画状态
              exit={{ opacity: 0, x: 20 }}       // 退出状态
              transition={{ duration: 0.4 }}     // 过渡时间
            >
              <Image
                src="/images/about_banner (1).webp" // Placeholder image
                alt="Work and community support"
                width={1500}
                height={300}
                className="mb-4 rounded-lg"
              />
              <h2 className="text-3xl font-bold mb-4 text-green">Supporting Communities, Empowering Work</h2>
              <p className="text-lg mb-4">
                Sampola is a non-profit organization committed to providing job opportunities and social support to people with special needs.
                Our vision is to create an inclusive society where everyone can improve their quality of life through meaningful work and gain social recognition and respect.
              </p>
              <p className="text-lg mb-4">
                Our mission is to create employment opportunities, provide training, and promote environmental projects to help people with disabilities and marginalized groups
                integrate into society and enhance their self-confidence. We collaborate with businesses and the government to advance social responsibility initiatives and foster sustainability.
              </p>
            </MotionDiv>
          </div>

        </TabsContent>

        {/* Core Services Section with Transition */}
        <TabsContent value="services" className="mb-16  bg-[#f3f2e9] p-6">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/sampola_banner3.webp" // Placeholder image
              alt="Work and community support"
              width={1500}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h2 className="text-3xl font-bold mb-4 text-green">Empowering Communities through Work</h2>
            <p className="text-lg mb-4">
              At Sampola, we provide three primary services to support communities and individuals with special needs:
            </p>
            <p className="text-lg mb-4">
              <strong>Work and Community Support:</strong> We offer personalized job placement services, ensuring individuals with disabilities can find meaningful work suited to their abilities, improving their quality of life.
            </p>
            <p className="text-lg mb-4">
              <strong>Recycling and Sustainability:</strong> Our recycling initiatives transform discarded materials into eco-friendly products, creating jobs and reducing environmental waste.
            </p>
            <p className="text-lg mb-4">
              <strong>Business Outsourcing Services:</strong> We partner with businesses to provide cost-effective outsourcing services such as packaging, assembly, and more, helping companies fulfill their social responsibility commitments.
            </p>
          </MotionDiv>
        </TabsContent>

        {/* Partners Section with Transition */}
        <TabsContent value="partners" className="mb-16  bg-[#f3f2e9] p-6">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            {/* <Image
              src="/images/image20.png" // Placeholder image
              alt="Work and community support"
              width={1500}
              height={300}
              className="mb-4 rounded-lg"
            /> */}
            <Carousel></Carousel>
            <h2 className="text-3xl font-bold mb-4 text-green">Building a Better Future Together</h2>
            <p className="text-lg mb-4">
              Sampola works with a wide range of local and international partners who share our commitment to social responsibility and sustainability.
              Together, we create meaningful work opportunities, foster social integration, and promote environmentally friendly practices.
            </p>
            <p className="text-lg mb-4">
              Our partners come from various industries, helping us expand our impact by offering resources, collaborations, and support for our mission.
              With their contributions, we are able to provide job opportunities for individuals in need while making a positive environmental impact.
            </p>
          </MotionDiv>
        </TabsContent>

        {/* Social Impact Section with Transition */}
        <TabsContent value="impact" className="mb-16  bg-[#f3f2e9] p-6">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/image4.png" // Placeholder image
              alt="Work and community support"
              width={1500}
              height={300}
              className="mb-4 rounded-lg max-h-[482px] object-cover"
            />
            <h2 className="text-3xl font-bold mb-4 text-green">Making a Difference, One Life at a Time</h2>
            <p className="text-lg mb-4">
              At Sampola, we believe in the transformative power of work. Through our programs, we have helped hundreds of individuals with disabilities gain employment,
              find a sense of purpose, and build confidence. Our recycling and sustainability projects further extend our impact by promoting environmental responsibility.
            </p>
            <p className="text-lg mb-4">
              Our social impact can be seen in the lives we have changed and the communities we have supported. Every job opportunity we create and every product we recycle
              brings us closer to a more inclusive and sustainable society.
            </p>
          </MotionDiv>
        </TabsContent>

        {/* About Us Section with Transition */}
        <TabsContent value="about" className="mb-16  bg-[#f3f2e9] p-6">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/sampola_banner4.webp" // Placeholder image
              alt="Work and community support"
              width={1500}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h2 className="text-3xl font-bold mb-4 text-green">Our Story and Vision</h2>
            <p className="text-lg mb-4">
              Sampola was founded in the 1960s with the goal of creating meaningful employment opportunities for individuals with disabilities and those in need of special support.
              Over the decades, we have grown into a comprehensive organization that not only provides job opportunities but also promotes sustainability through various recycling initiatives.
            </p>
            <p className="text-lg mb-4">
              Our vision is to create a world where work is accessible to everyone, and communities are built on the principles of inclusion and sustainability.
              We strive to integrate individuals into the workforce, helping them lead fulfilling lives while contributing to a healthier planet.
            </p>
          </MotionDiv>
        </TabsContent>
      </Tabs>

      {/* <Separator className="my-10 h-[2px] bg-green justify-center w-full" /> */}
      <div className="flex w-full justify-center">
        <Separator className="my-10 h-[2px] w-[95%] bg-green justify-center " />
      </div>

      {/* Core Services Section */}
      <section className="mb-16">
        <Card className="border-0 shadow-none overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 py-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green">Toimintamme vaikutus/Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Asiakkaan osallisuuden vahvistamisen ja elämänlaadun paranemisen myötä saavutetut säästöt syrjäytymisestä aiheutuvista sosiaali- ja terveydenhuollon kustannuksista
                  Kolmannen sektorin ja yritysmaailman välisen yhteistyön vahvistaminen
                  Hyvinvointiyhteiskunnan tukeminen yritysyhteistyön kautta
                </p>
              </CardContent>
            </div>
            <div className="md:w-1/2 p-6 flex items-center justify-center">
              <div className="relative w-96 h-96">
                <Image
                  src="/images/img1.webp"
                  alt="Work and community support"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </Card>
        <div className="flex w-full justify-center">
          <Separator className="my-10 h-[2px] w-[95%] bg-green justify-center " />
        </div>
        <Card className="border-0 shadow-none overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green">Customer Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a eros dictum, malesuada sem at, pulvinar est. Morbi congue non mi sed aliquam. Morbi finibus iaculis pulvinar. Duis egestas quam venenatis massa fermentum vehicula. Donec arcu nisl, molestie in mauris et, hendrerit mollis augue. Sed suscipit iaculis nisl, quis feugiat odio venenatis eget.
                </p>
              </CardContent>
            </div>
            <div className="md:w-1/2 p-6 flex items-center justify-center">
              <div className="relative w-96 h-96">
                <Image
                  src="/images/img2.webp"
                  alt="Work and community support"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </Card>
      </section>
      <div className="flex w-full justify-center">
        <Separator className="mb-20 h-[2px] w-[95%] bg-green justify-center " />
      </div>
      {/* FAQ Section */}
      <Faq></Faq>

      {/* Success Stories Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-green-dark">Sampola's Success Stories</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg overflow-hidden">
            <Image
              src="/images/image18.webp" // Placeholder image
              alt="Success story 3"
              width={400}
              height={250}
              className="w-full  md:h-72 h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-green-dark">Work Support in the Community</h3>
              <p className="mb-4">With Sampola's help, many individuals with disabilities have found meaningful work, boosting their confidence and improving their lives.</p>
              <Link href="#" className="text-green hover:underline">Read More</Link>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg overflow-hidden">
            <Image
              src="/images/image35.jpeg" // Placeholder image
              alt="Success story 2"
              width={400}
              height={250}
              className="w-full  md:h-72 h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-green-dark">Success in Recycling Projects</h3>
              <p className="mb-4">Sampola's recycling projects have transformed old advertising materials into eco-friendly products, earning praise from businesses and the community.</p>
              <Link href="#" className="text-green hover:underline">Read More</Link>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg overflow-hidden">
            <Image
              src="/images/image17.png" // Placeholder image
              alt="Success story 3"
              width={400}
              height={250}
              className="w-full  md:h-72 h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-green-dark">Outsourcing Services for Businesses</h3>
              <p className="mb-4">Through partnerships with local businesses, Sampola provides high-quality outsourcing services that help companies save costs while meeting their social responsibility commitments.</p>
              <Link href="#" className="text-green hover:underline">Read More</Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
