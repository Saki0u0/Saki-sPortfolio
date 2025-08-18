// app/(about)/my-strengths/Strengths.tsx
"use client";
import { useState } from "react";
import ModalCard from "./modal";
import { IoPeople, IoSearch, IoShapes } from "react-icons/io5";

type Strength = {
  key: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  summary: string;  
  detail: React.ReactNode;
};

const strengths: Strength[] = [
  {
    key: "teamwork",
    icon: IoPeople,
    title: "Teamwork",
    subtitle: "チームワーク力",
    summary:
      "環境の違いを乗り越える順応力",
    detail: (
      <>
        <p>
          日々異なるメンバーと連携し、状況に応じて柔軟に行動してまいりました。報連相を徹底し、自分の担当だけでなく周囲の状況も把握し、必要な時にはすぐにサポートに入るよう努めております。安全で円滑な業務進行を支えるため、常に全体を見渡しながら行動することを心がけております。
        </p>
      </>
    ),
  },
  {
    key: "curiosity",
    icon: IoSearch,
    title: "Curiosity",
    subtitle: "探究心",
    summary:
      "疑問を深掘りし、改善へつなげる力",
    detail: (
      <>
        <p>
          業務の中で生じた疑問はそのままにせず、先輩や周囲に質問をし、理解を深めてまいりました。観察・質問・改善のサイクルを意識し、学んだことはすぐに自分の業務や制作物に反映させております。Web制作においても、気づいた改善点は調査や検証を行い、より良いUI/UXの実現につなげております。
        </p>
      </>
    ),
  },
  {
    key: "flexibility",
    icon: IoShapes,
    title: "Flexibility",
    subtitle: "適応力",
    summary:
      "環境の違いを乗り越える順応力",
    detail: (
      <>
        <p>
          グランドスタッフとして、多岐にわたる業務に携わり、日々担当や仕事内容が変わる中で、さまざまな状況に対応する力を身につけてまいりました。その経験は、カナダで日本食レストランに入った際にも活かされ、短期間で業務を習得し、社員の方々から信頼を得ることにつながりました。環境や役割が変化しても、柔軟に順応し成果を出すことを心がけております。
        </p>
      </>
    ),
  },
];

export default function Strengths() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  return (
    <section className="mx-auto max-w-6xl px-4 mt-20 mb-22">
      <div className="grid gap-6 md:grid-cols-3">
        {strengths.map((s) => {
          const Icon = s.icon;
          const open = openKey === s.key;
          return (
            <article
              key={s.key}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="mb-4 flex items-center justify-center">
                <Icon size={90} className="text-[#FB9AA3]" />
              </div>
              <h3 className="text-2xl font-bold text-center text-[#03005D] mb-2">
                {s.title}
              </h3>
              <p className="text-center text-sm text-black/60">{s.subtitle}</p>
              <p className="mt-3 text-sm leading-7 text-center">{s.summary}</p>

              <button
                className="mt-4 w-full rounded-xl border border-black/10 py-2.5
                           text-sm font-semibold cursor-pointer text-[#03005D] hover:bg-[#03005D] hover:text-white transition"
                onClick={() => setOpenKey(s.key)}
              >
                詳しく見る
              </button>

              <ModalCard
                open={open}
                onClose={() => setOpenKey(null)}
                icon={<s.icon size={90} className="text-[#FB9AA3]" />}
                title={`${s.title}`}
                subtitle={s.subtitle}
                summary={s.summary}
              >
                {s.detail}
              </ModalCard>
            </article>
          );
        })}
      </div>
    </section>
  );
}
