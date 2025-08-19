import Image from "next/image";

export default function AboutSection() {
  return (
    <div>
      <h2 className="title text-5xl mb-10 tracking-widest font-jaro">About</h2>
        <div className="flex w-[96%] md:w-[90%] mx-auto flex-col md:flex-row  md:items-center bg-white rounded-2xl md:p-10 py-8 px-6 shadow-sm">
          <div  className="w-full md:w-[30%]"> 
            <div className="relative w-full flex items-center justify-center">
              <Image 
                  src="/about/icon.JPG"
                  alt="説明文"
                  width={600}
                  height={800}
                  style={{ objectFit: 'cover' }}
                  className="mx-auto rounded-2xl shadow-sm"
                ></Image>
            </div>
          </div>
            
          <div className="w-full mt-10 md:ml-16 md:w-[60%] md:mt-0 ">
            <h3 className="mb-3 text-2xl font-bold tracking-widest">人を支える力を、デザインに。
            </h3>
            <p className="mb-6 text-lg">グランドスタッフとして培った対応力と探究心を活かし、デザインで課題を解決します。</p>
    
            <p className="font-sans mb-6 leading-loose">
            新卒で航空会社に入社し、国際線グランドスタッフとして約4年間勤務。多様な国籍・文化の方々との対応を通じて、柔軟なコミュニケーション力と課題解決力を磨きました。その後、英語力をさらに伸ばしつつ、Webアプリを通じて人やビジネスの課題解決に貢献したいという思いから、カナダへ渡航。現在はWeb開発とUI/UXデザインを学び、実践的な制作活動に取り組んでいます。
            </p>
            
            <h3 className="md:text-7xl mb-2 tracking-widest text-5xl text-center md:text-left font-jaro font-bold title">EBINA SAKI</h3>
            <h4 className="text-xl tracking-widest text-center md:text-left title">海老名　彩希</h4>
          </div>
        </div>
    </div>
  )
}