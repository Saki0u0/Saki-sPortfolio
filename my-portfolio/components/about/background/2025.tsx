import Image from "next/image";

export default function Section2025() {

  return(
    <div>
      <section className="space-y-6 font-sans">
          <div className="bg-[#fffafc] shadow-sm p-10 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">2025.05</h2>
            <h3 className="mb-4 font-semibold">Cornerstorn International Community Collage　卒業</h3>

            <div className="flex flex-col lg:flex-row-reverse ">
              <Image 
              src="/about/background/finalproject.png"
              alt="説明文"
              width={400}
              height={600}
              style={{ objectFit: 'cover' }}
              className="mx-auto"
              ></Image>

              <p className="text-sm leading-loose md:mr-10 mt-10 md:items-center">
                入学して2ヶ月間、キャリアに特化した語学学校にて英語を学びました。毎週のプレゼンテーションや課題を最終課題として、2ヶ月間かけてチーム開発に取り組み、最終プレゼンテーションも行いました。企画・デザイン・要件定義から実装・発表までをすべて自分たちの手で行い、ひとつのWebアプリケーションを完成させました。私は主にデザインを担当し、Figmaを用いてUI設計を行いながら、使いやすさや見た目のバランスにもこだわりました。このプロジェクトを通じて、メンバー間で役割や進捗を共有しながら一つの目標に向かって進む難しさを実感しました。限られた期間の中でスケジュールを管理し、必要な調整やコミュニケーションを重ねながら進める中で、計画力・チームワークについて学ぶことができました。
              </p>
            </div>
          </div>
        
          <div className="bg-[#fffafc] shadow-sm p-10 rounded-2xl">
            <h2 className="text-xl font-bold mb-2">2025 現在</h2>
            <h3 className="mb-6 font-semibold">カナダ・バンクーバーにて就労・学習中</h3>
            <p className="text-sm leading-loose">
            現在は、ローカルの寿司レストランとベーカリーで働きながら、独学でデザインと開発の勉強を続けています。
            寿司レストランにてサーバーとして約1年間勤務しており、後輩指導やトレーニングも担当しています。最近ではバーテンダーとしての業務にも挑戦し、お酒の知識を深めることで、よりお客様に喜んでいただける接客を意識しています。常連のお客様にも名前を覚えていただき、カナダならではのフレンドリーな接客スタイルで、日々多くのお客様とコミュニケーションを取っています。
            <br/>
            また、地元で人気のベーカリーでは、主にサンドイッチの製作を担当しています。注文数の多い環境の中で、限られた時間内に正確かつ効率的にタスクをこなす力を養ってきました。職場には日本人がいないため、英語環境の中で積極的にコミュニケーションを取り、チームワークを大切にしながら日々業務に取り組んでいます。
            どの仕事においても、与えられた役割以上の価値を提供できるよう、常に高い意識で業務に向き合うことを大切にしています。
            </p>
          </div>

      </section>
    </div>
  )
}