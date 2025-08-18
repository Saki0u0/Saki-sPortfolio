import Image from "next/image";

export default function Section2024() {

  return(
    <div>
      <section className="space-y-6 font-sans">
      <div className="bg-[#fffafc] shadow-sm p-10 rounded-2xl">
        <h2 className="text-xl font-bold mb-2 font-sans">2024.02</h2>
        <h3 className="mb-6 font-sans font-semibold">ANA成田エアポートサービス株式会社　退職</h3>
        <div className="flex flex-col lg:flex-row">
          <p className="text-sm leading-loose">
          約3年9ヶ月勤務し、退職いたしました。在職中は、OJTトレーナーとして後輩の育成に携わり、またゲート業務においてはチームリーダーを務めました。現場での経験を通して、円滑なコミュニケーションの取り方や、チーム内での役割意識、リーダーシップの大切さなど、多くのことを学びました。また、日々の業務の中ではさまざまなイレギュラー対応にも直面し、そのたびに臨機応変に行動する力を養うことができました。さらに、飛行機の出入国に関わるバックオフィス業務も担当し、現場を裏から支える仕事にも携わるなど、幅広い視点で業務に取り組んでいました。

          <br />空港で多くの方の旅をサポートする中で、次第に「自分自身も異国の地で挑戦してみたい」という想いが芽生えてきました。また、バックオフィス業務を担当する中で、現場を裏から支える役割にやりがいを感じると同時に、業務のデジタル化が進む中でWebアプリを扱う場面が増えたことで、次第にWebアプリへの関心が高まっていきました。
          
          クリエイティブな分野に興味があったこともあり、「Webの力で課題解決に貢献したい」と思うようになりました。自分の将来について考える中で「COOP留学」という学び方に出会い、実践的なスキルを身につけるために、カナダへの留学を決意しました。
          </p>
        </div>
      </div>
        
      <div className="bg-[#fffafc] shadow-sm p-10 rounded-2xl">
        <h2 className="text-xl font-bold mb-2 font-sans">2024.02</h2>
        <h3 className="mb-6 font-semibold">カナダ・バンクーバーへ留学 / Cornerstorn International Community Collage入学</h3>
        <div className="flex flex-col lg:flex-row-reverse ">
          <Image 
            src="/about/background/vancouver.jpg"
            alt="説明文"
            width={400}
            height={600}
            style={{ objectFit: 'cover' }}
            className="mx-auto"
          ></Image>
          <p className="text-sm leading-loose md:mr-10 mt-10 md:items-center font-sans">
            入学して2ヶ月間、キャリアに特化した語学学校にて英語を学びました。毎週のプレゼンテーションや課題を通して、英語に集中的に触れることができ、実践的な英語力を身につけることができました。授業では環境問題などの社会的なテーマについて英語で議論する機会も多く、ビジネス英語を中心に学びながら、幅広い視点での考え方や発信力も養いました。
          </p>
        </div>
      </div>
        
        <div className="bg-[#fffafc] shadow-sm p-10 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">2024.04</h2>
          <h3 className="mb-2 font-sans font-semibold">Cornerstorn International Community CollageにてWeb Developmentコース開始
          </h3>
          <div className="flex flex-col lg:flex-row mt-10">
          <Image 
              src="/about/background/cornerstone.jpg"
              alt="説明文"
              width={400}
              height={600}
              style={{ objectFit: 'cover' }}
              className="mx-auto"
            ></Image>
            <p className="text-sm leading-loose md:ml-10 md:items-center mt-10">
              1年を通して、HTML・CSS・JavaScriptをはじめ、AstroやReact、Next.jsなどのモダンなWebアプリケーション開発に用いられる技術を学びました。フロントエンドだけでなく、Node.jsなどのバックエンド技術も学習し、フルスタックでの開発に取り組んできました。また、月に1回のペースで個人またはチームでの開発課題に取り組み、成果物をプレゼンテーションする機会もあり、実践的な開発力と表現力を養ってきました。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}