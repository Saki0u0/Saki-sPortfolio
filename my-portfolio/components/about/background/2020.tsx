import Image from "next/image";

export default function Section2020() {

  return(
    <div>
      <section className="space-y-6">
        <div className="bg-[#fffafc] shadow-sm p-10 rounded-2xl">
          <h2 className="text-xl font-bold mb-2 font-sans ">2020.03</h2>
          <h3 className="mb-6 font-semibold">日本女子大学（家政学部住居学科居住環境デザイン専攻）卒業</h3>

          <div className="flex flex-col lg:flex-row">
            <Image 
              src="/about/background/univercity.JPG"
              alt="説明文"
              width={400}
              height={600}
              style={{ objectFit: 'cover' }}
              className="mx-auto"
            ></Image>
            <p className="text-sm leading-loose md:ml-10 mt-10">
              在学中はデザイン力・表現力を重視したカリキュラムのもとで学びました。実習や施設見学などの実地的な学びも多く取り入れられており、インテリアデザインやバリアフリーデザイン、地域コミュニティに関わるデザインなど、専門性の高い分野についても段階的に学習しました。これらの経験を通じて、実践的かつ多角的な視点でデザインに向き合う姿勢を身につけました。
            </p>
          </div>
          <div className="flex flex-col lg:flex-row-reverse mt-10">
            <Image 
              src="/about/background/trip.JPG"
              alt="説明文"
              width={400}
              height={600}
              style={{ objectFit: 'cover' }}
              className="mx-auto"
            ></Image>
            <p className="text-sm leading-loose md:mr-10 mt-10 md:items-center">
              在学中、異文化に実際に触れたいという想いから、アルバイトでお金を貯めてさまざまな国を訪れました。旅行だけでなく、カナダでの短期留学やニューヨークでのインターンシップなどを通じて、現地の人々と実際に交流しながら、より深く異文化に触れることを大切にしてきました。多様な価値観を持つ人々と関わる中で、もっとスムーズにコミュニケーションを取れるようになりたいという思いが強まり、英語学習にも力を入れていきました。その結果TOEICの点数を３００点上げることができ、自信にもつながりました。
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#fffafc] shadow-sm p-10 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">2020.06</h2>
            <h3 className="mb-6 font-semibold">ANA成田エアポートサービス株式会社　入社</h3>
            <p className="text-sm leading-loose">
              異文化に触れる中で、より多くの人と関わりたい、そしてこれまでの異文化体験を仕事にも活かしたいという思いが強まり、国際線のグランドスタッフとして就職しました。入社当初は新型コロナウイルスの影響により運航便数が大きく減少し、希望していたような業務に携わる機会は限られていましたが、到着便での検疫補助業務に従事する中で、世界の変化や影響を身近に感じる貴重な経験を得ることができました。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}