import AboutSubnavResponsive from "@/components/about/profile/AboutSubnavResponsive"
import Header from "@/components/ui/header"
import Image from "next/image"

export default function MyVision() {
  return (
    <div>
      <Header/>
      <div className="mt-20 font-sans md:w-[80%] w-[96%] mx-auto">
        <h2 className="title text-5xl mb-10 tracking-widest">My Vision</h2>
        <div className="overflow-y-auto h-[66vh] md:p-10 p-4">
          <div className="bg-white md:p-16 p-8 rounded-2xl shadow-sm flex md:flex-row flex-col justify-center mb-10">
            <div className="md:mr-10 md:mb-0 mb-10">
              <h4 className="text-xl mb-2 text-[#FB9AA3] font-semibold">MY GOAL</h4>
              <h3 className="text-2xl mb-4 font-semibold">ユーザーに寄り添い、実現力のあるデザイナーへ。</h3>
              <p className="leading-loose">航空会社で培った傾聴力と課題解決力を活かし、ユーザーに寄り添うUI/UXを生み出せるよう成長していきます。Web開発スキルも伸ばし、実装段階までサポートできるデザイナーを目指します。</p>
            </div>
            <Image
            src="/about/myvision/goal.svg"
            alt="My vision image"
            width={200}
            height={400}
            className="mx-auto"
            />
          </div>
          
          <div className="my-20">
            <div className="flex items-center gap-8 w-full md:flex-row flex-col">
              <div className="bg-white p-8 rounded-full md:w-[16%] w-[58%] md:mr-8 mb-10 md:mb-0">
                <Image
                  src="/about/myvision/now.png"
                  alt="My vision image"
                  width={100}
                  height={100}
                  className="mx-auto items-center justify-center"
                  />
              </div>
              <div className="w-[76%] flex-1">
                <h4 className="text-xl mb-2 text-[#FB9AA3] font-semibold">NOW</h4>
                <h4 className="text-xl mb-4 font-semibold">未経験から、一歩ずつ、確かなデザイナーへ</h4>
                <p className="leading-loose mb-6">現場でのプロジェクト進行やチームワークを経験しながら、自ら提案できる力を磨いていきます。幅広い知識と引き出しを増やし、説得力あるデザインで価値を生み出すデザイナーを目指していきます。</p>
              </div>
            </div>

            <div className="relative h-20 md:h-20 my-8">
              <span
                className="
                  lg:block hidden absolute left-1/2 md:left-[90px] top-0 bottom-0 w-[2px]
                  -translate-x-1/2 md:translate-x-0
                  bg-[repeating-linear-gradient(to_bottom,theme(colors.gray.600)_0_10px,transparent_10px_22px)]
                "
                aria-hidden
              />
            </div>

            <div className="flex items-center md:flex-row flex-col">
              <div className="bg-white p-8 rounded-full md:w-[16%] w-[58%] md:mr-8 mb-10 md:mb-0">
                <Image
                  src="/about/myvision/3years.png"
                  alt="My vision image"
                  width={100}
                  height={100}
                  className="mx-auto items-center justify-center"
                  />
              </div>
              <div className="w-[76%]">
                <h4 className="text-xl mb-2 text-[#FB9AA3] font-semibold">3 YEARS LATER</h4>
                <h4 className="text-xl mb-4 font-semibold">共に育ち、共に高め、成果をつなぐデザイナーへ</h4>
                <p className="leading-loose">後輩の育成や指導を通じて、チーム全体の成長と成果に貢献します。プロジェクトの品質や効率を高める提案を積極的に行い、チームをリードする存在を目指します。</p>
              </div>
            </div>

            <div className="relative h-20 md:h-20 my-8">
              <span
                className="
                  lg:block hidden absolute left-1/2 md:left-[90px] top-0 bottom-0 w-[2px]
                  -translate-x-1/2 md:translate-x-0
                  bg-[repeating-linear-gradient(to_bottom,theme(colors.gray.600)_0_10px,transparent_10px_22px)]
                "
                aria-hidden
              />
            </div>

            <div className="flex items-center md:flex-row flex-col">
              <div className="bg-white p-8 rounded-full md:w-[16%] w-[58%] md:mr-8 mb-10 md:mb-0">
                <Image
                  src="/about/myvision/5years.png"
                  alt="My vision image"
                  width={100}
                  height={100}
                  className="mx-auto items-center justify-center"
                  />
              </div>
              <div className="w-[76%]">
                <h4 className="text-xl mb-2 text-[#FB9AA3] font-semibold">5 YEARS LATER</h4>
                <h4 className="text-xl mb-4 font-semibold">学びを力に、チームを導く存在に</h4>
                <p className="leading-loose">5年後は、プロジェクト全体を俯瞰し、チームの方向性を導けるデザインリーダーとして活躍したいと考えています。クライアントやユーザーの課題解決を軸に、戦略的なデザイン提案ができる力を身につけるとともに、メンバーの成長を支えながら成果を最大化できる環境づくりにも取り組みます。</p>
              </div>
            </div>
          </div>
          <div className="border border-[#FB9AA3] md:p-16 p-8 rounded-2xl">
            <div className="mb-8">
              <h4 className="text-2xl mb-8 text-[#FB9AA3] font-semibold">CHALLENGE</h4>
              <h5 className="mb-2 font-semibold">業務習得のスピードを最大化する</h5>
              <p className="leading-loose">先輩から業務フローやツールの使い方、デザインの意図を積極的に吸収し、自ら調べて理解を深めることで、早期に即戦力として貢献します。</p>
            </div>
              
            <div className="mb-8">
              <h5 className="mb-2 font-semibold">ユーザー視点の改善提案を行う</h5>
              <p className="leading-loose">日々の業務で得た気づきを整理し、データや事例をもとに改善案を提案。ユーザー体験の向上を常に意識し、サービス価値の最大化を目指します。</p>
            </div>

            <div>
              <h5 className="mb-2 font-semibold">デザインと実装をつなぐ存在になる</h5>
              <p className="leading-loose">フロントエンドの知識を活かし、デザインから実装までスムーズに連携できる橋渡し役として、チームの成果と効率を高めます。</p>
            </div>
          </div>
        </div>
        
      </div>

      <AboutSubnavResponsive />
    </div>
    
  )}