import { works,FontInfo } from "@/app/data/worksData"
import Image from "next/image";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";

type Params = {
  params: {
    slug: string;
  };
};



export default function WorkDetailPage({ params }: Params) {
  const work = works.find((w) => w.slug === params.slug);
  const fontItems: FontInfo[] = work?.font
  ? Array.isArray(work.font)
    ? work.font
    : [work.font]
  : [];

  if (!work) return <div>Work not found</div>;

  return (
    <div>
      <Header/>
      <div className="p-8 md:w-[80%] w-[96%] mx-auto my-20">
        <Link href="/works" className="flex text-[#FB9AA3]">
        <FaRegArrowAltCircleLeft size={24} className="text-[#FB9AA3]"/><p className="ml-2 ">リストに戻る</p>
        </Link>
        <h1 className="text-4xl font-bold tracking-widest title mt-6">{work.title}</h1>
        <div className="font-sans mt-8 flex w-full flex-wrap leading-loose">
          <p className="mr-6">TYPE:<span className="ml-2">
          {work.category}</span></p>
          <p className="mr-6">Create Date:
            <span className="ml-2">
              {work.created}
            </span>
          </p>
          <p className="mr-6">制作期間:
            <span className="ml-2">
              {work.duration}
            </span>
          </p>
          <p className="mr-6">担当:
            <span className="ml-2">
              {work.role.join(' / ')}
            </span>
          </p>
          <p className="mr-6">使用ツール:
            <span className="ml-2">
              {work.tools.join(' / ')}
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row mt-10 gap-6">
          <Image
            src={work.image}
            alt={work.title}
            width={660}
            height={400}
            className="mx-auto lg:h-[500px] w-auto"
          />
           {work.phoneImage && (
            <Image
            src={work.phoneImage}
            alt={work.title}
            width={200}
            height={400}
            className="mx-auto lg:h-[500px] w-auto"
            /> 
           )}
        </div>
        <p className="leading-loose mt-10 font-sans mb-20">{work.overview}</p>

        <div className="font-sans mt-10">
          <div className="flex mb-4 items-center">
            <IoAirplaneSharp size={32} className="text-[#FB9AA3] mr-3" />
            <h2 className="text-2xl font-bold">Purpose</h2>
            <h3 className="ml-4 mt-1">目的</h3>
          </div>
          <p className="leading-loose">
            {work.purpose}
          </p>
        </div>
      
        <div className="font-sans mt-10">
          <div className="flex mb-4 items-center">
            <IoAirplaneSharp size={32} className="text-[#FB9AA3] mr-3" />
            <h2 className="text-2xl font-bold">Problem</h2>
            <h3 className="ml-4 mt-1">課題</h3>
          </div>
          <p className="leading-loose">
            {work.problem}
          </p>
        </div>

        <div className="font-sans mt-10">
          <div className="flex mb-4 items-center">
            <IoAirplaneSharp size={32} className="text-[#FB9AA3] mr-3" />
            <h2 className="text-2xl font-bold">Solution</h2>
            <h3 className="ml-4 mt-1">解決法</h3>
          </div>
          <p className="leading-loose">
            {work.solution}
          </p>
        </div>
    
        {work.target && (
          <div className="mt-10 font-sans">
            <div className="mb-4">
              <div className="flex items-center">
                <IoAirplaneSharp size={32} className="text-[#FB9AA3] mr-3" />
                <h2 className="text-2xl font-bold ">Target</h2>
                <h3 className="ml-2 text-base font-normal">ターゲット</h3>
              </div>
            </div>
            <ul className="mt-2 space-y-2 leading-loose">
              {work.target.age && (
                <li>
                  <span className="font-semibold">年齢層：</span>{work.target.age}
                </li>
              )}
              {work.target.lifestyle && (
                <li>
                  <span className="font-semibold">ライフスタイル：</span>{work.target.lifestyle}
                </li>
              )}
              {work.target.needs && (
                <li>
                  <span className="font-semibold">ニーズ：</span>
                  {Array.isArray(work.target.needs)
                    ? work.target.needs.join("、")
                    : work.target.needs}
                </li>
              )}
              {work.target.useCases && (
                <li>
                  <span className="font-semibold">利用シーン：</span>
                  {Array.isArray(work.target.useCases)
                    ? work.target.useCases.join("、")
                    : work.target.useCases}
                </li>
              )}
              {work.target.psychologicalFactors && (
                <li>
                  <span className="font-semibold">心理的背景：</span>
                  {Array.isArray(work.target.psychologicalFactors)
                    ? work.target.psychologicalFactors.join("、")
                    : work.target.psychologicalFactors}
                </li>
              )}
            </ul>
          </div>
        )}


        <div className="font-sans mt-10">
          <div className="flex mb-8 items-center">
            <IoAirplaneSharp size={32} className="text-[#FB9AA3] mr-3" />
            <h2 className="text-2xl font-bold">Design</h2>
            <h3 className="ml-4 mt-1">デザイン</h3>
          </div>
          <div className="mx-auto w-[90%]">
            <div className="flex mt-6 items-center">
              <h4 className="text-xl font-bold">Font</h4>
              <h4 className="ml-4">フォント</h4>
            </div>
            {fontItems.length > 0 && (
              <div className="mt-6 mb-20 font-sans leading-loose">
                {fontItems.map((f, i) => (
                  <div key={i} className="mt-6">
                    <p className="text-2xl mt-4">
                      <span className={f.className}>{f.fontTitle}</span>
                    </p>
                    {f.description && <p className="mt-4">{f.description}</p>}
                  </div>
                ))}
              </div>
            )}

          
          {work.illustrationSection && (
            <section className="mt-4 mb-20 leading-loose">
              <div className="flex items-center">
                <h4 className="text-xl font-bold">illustration</h4>
                <h4 className="ml-4">イラスト</h4>
              </div>
              <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {work.illustrationSection.illustrations.map((illu, i) => (
                  <div key={i} className="flex flex-col items-center text-center mb-4">
                    <div className="w-[200px] h-[200px] relative">
                      <Image
                        src={illu.image}
                        alt={illu.title ?? "illustration"}
                        className="object-contain"
                        fill
                      />
                    </div>
                    <p className="mt-4 text-gray-800">{illu.title}</p>
                  </div>
                ))}
              </div>
              <p className="mt-2">{work.illustrationSection.description}</p>
            </section>
          )}

          <div className="flex items-center">
            <h4 className="text-xl font-bold">Color</h4>
            <h4 className="ml-4 mt-1">カラー</h4>
          </div>
          <div className="flex gap-6 my-10">
            {work.colorSection?.colors.map((color, index) => (
            <div key={index} className="flex flex-col text-center mx-auto">
            <div
              className="w-16 h-16 rounded-full"
              style={{ backgroundColor: color.hex }}
            />
            <p className="text-xs text-gray-500 mt-4">{color.hex}</p>
          </div>
          ))}
         </div>
          <div className="mt-4 mb-20">
            <p className="mb-4 leading-loose">{work.colorSection?.description}</p>
          </div>
          </div>
        </div>
        <div className="font-sans mt-10">
          <div className="flex mb-4 items-center">
            <IoAirplaneSharp size={32} className="text-[#FB9AA3] mr-3" />
            <h2 className="text-2xl font-bold">Wireframe</h2>
            <h3 className="ml-4 mt-1">ワイヤーフレーム</h3>
          </div>
          <div className="mt-10 mb-20">
          {Array.isArray(work.wireframes)
            ? work.wireframes.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  width={700}
                  height={400}
                  alt={`ワイヤーフレーム${index + 1}`}
                  className="mx-auto mb-8"
                  layout="responsive"
                />
              ))
            : work.wireframes && (
                <Image
                  src={work.wireframes}
                  width={600}
                  height={400}
                  alt="ワイヤーフレーム"
                  className="mx-auto"
                />
              )}
          </div>
          
        </div>
        <div className="font-sans mt-10">
          <div className="flex mb-4 items-center">
            <IoAirplaneSharp size={32} className="text-[#FB9AA3] mr-3" />
            <h2 className="text-2xl font-bold">Final Design</h2>
            <h3 className="ml-4 mt-1">完成品</h3>
          </div>
          {work.finalDesign?.map((page, index) => (
          <section key={index} className="my-10 mb-20">
            <div className="flex mb-10">
              <h3 className="text-xl flex font-bold">
              {page.pageTitle.en}  </h3>
              <span className="block text-sm mt-1 ml-6">{page.pageTitle.ja}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-10">
                <div className="relative shrink-0 w-full lg:w-[700px] max-w-[700px] 
                  h-56 sm:h-64 md:h-80 lg:h-[500px]">
                  <Image
                    src={page.images.pc}
                    alt={`${page.pageTitle.ja} - PC`}
                    fill
                    className="object-contain"
                    sizes="(min-width:1024px) 700px, 100vw"
                    priority
                  />
                </div>
                
                {page.images.mobile && (
                  <div className="relative shrink-0 w-[60%] lg:w-[220px] max-w-[220px]
                    h-56 sm:h-64 md:h-80 lg:h-[500px]">
                    <Image
                      src={page.images.mobile}
                      // width={200}
                      // height={350}
                      fill
                      alt={`${page.pageTitle.ja} - Mobile`}
                      className="object-contain"
                      sizes="(min-width:1024px) 220px, 50vw"
                      //  layout="responsive"
                    />
                  </div>
                )}
              </div>
            </div>

            <p className="mt-4 whitespace-pre-wrap leading-loose">
              {page.description}
            </p>
          </section>
        ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
