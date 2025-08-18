
export type pageSection = {
  title: string;
  description?: string;
  images?: string[]; 
};

export type FontInfo = {
  fontTitle?: string; 
  description?: string;
  images?: string[];
  className?:string;
};

export type Illustration = {
  title?: string;
  image: string;
};

export type IllustrationSection = {
  description?: string;
  illustrations: Illustration[];
};

export type ColorItem = {
  name: string; 
  hex: string;
};

export type ColorSection = {
  description?: string;
  colors: ColorItem[];
};

export type TargetSection = {
  age?: string[] | string; 
  lifestyle?: string; 
  needs?: string[] | string; 
  useCases?: string[]; 
  psychologicalFactors?: string[]; 
};

export type WireFrameSection = {
  title: string;
  description?: string;
  images: string[] | string;
};

export type FinalDesignPage = {
  pageTitle: {
    en: string;
    ja: string;
  };
  description: string;
  images: {
    pc: string;
    mobile?: string;
  };
};


export type Work = {
  id: number;
  title: string;
  description:string;
  slug: string;
  image: string;
  modalImage?: string;
  pcImage: string;
  phoneImage?:string;
  category: string;
  url?: string;
  duration: string;
  role: string[];
  created: string;
  tools: string[];

  overview: string;
  purpose?: string;
  problem?: string;
  solution?:string;
  target?: TargetSection;

  font?: FontInfo | FontInfo[];
  illustrationSection?: IllustrationSection;
  colorSection?: ColorSection;
  wireframes?: string[] | string ;
  finalDesign?: FinalDesignPage[] ;
};


export const works: Work[] = [
  // Kanban app
 {
  id: 1,
  title: "Kanban app",
  description:`このカンバンアプリは、TypeScriptを使用してチームで協力して開発したプロジェクトです。私は主にUIデザインを担当し、ハロウィンが近かったことから、季節感を取り入れたハロウィンデザインを採用しました。タスクの整理や管理を楽しく行えるよう工夫をしました。`,
  slug: "kanban-app",
  image:  "/works/kanban-app/top_PC.png",
  modalImage: "/works/kanban-app/mobile.png",
  pcImage: "/works/kanban-app/kanban-pc.png",
  phoneImage:"/works/kanban-app/top_mobile.png",
  category: "School Project",
  url:"https://kanbanapp-yq35.onrender.com", 
  duration:"3weeks",
  role: ["UIデザイン" ,"フロントエンド"],
  created: "2024.10",
  tools: [ "HTML", "Tailwind","TypeScript", "Astro"],

  overview: "本プロジェクトは、チーム開発で行ったハロウィンをテーマにしたカンバン方式のToDoアプリです。Astro, tailwind, TypeScriptなどを用い、ドラッグ＆ドロップ機能やモーダル、検索機能などの実装を行いました。レスポンシブにも対応し、モバイルユーザーにも使いやすい設計を意識しました。",

  purpose: "タスク管理をもっと楽しく、気軽にできるようにすることを目的としました。義務的に感じやすいToDo管理に、可愛いデザインを取り入れることで、心理的なハードルを下げ、継続して使いたくなるような体験を提供します。",

  problem: `既存のタスク管理アプリ（TrelloやJiraなど）は、チームでの業務利用や複雑なプロジェクト管理に適した高機能な設計となっています。
  しかし、16〜25歳の学生や若手社会人など、個人で日常的なToDo管理をしたいユーザーにとっては、機能が多すぎてハードルが高く感じられることがあります。
  また、業務向けのシンプルなデザインや無機質なUIが中心で、「かわいくて気軽に使える」ようなツールを求めている層にとっては親しみにくさが残ると考えました。`,

  solution:`上記の課題に対して、学生や若手社会人でも気軽に使える、シンプルで親しみやすいタスク管理アプリを目指して、カンバン方式のUIを作成しました。

  タスクは「ToDo」「In Progress」「Done」の3つのステータスに分類され、進捗状況を一目で把握できるカラムレイアウトを採用。
  ドラッグ＆ドロップ操作でタスクを移動できることで、操作に不慣れなユーザーでも直感的に使えるよう工夫しています。

  また、名前を入力して自分専用のボードとして使えるパーソナライズ機能や、ハロウィン風のイラスト、柔らかい色合いのデザインなどを取り入れ、日常的に使いたくなる「かわいくて親しみやすい」世界観を表現しました。`,

  target: {
    age: ["16–25"],
    lifestyle:
      "高校生・大学生・若手社会人。短時間にタスク整理したい層",
    needs: [
      "直感的なドラッグ＆ドロップ操作",
      "3カラムのシンプルな進捗管理（ToDo / In Progress / Done）",
      "モバイル最適化と片手操作のしやすさ",
      "可愛い世界観で継続利用の動機づけ",
      "クイックなタスク追加・検索",
      "自分の名前でパーソナライズされたボード"
    ],
    useCases: [
      "授業課題・レポートの進捗管理",
      "試験勉強の計画立てと進捗可視化",
      "アルバイトやイベント準備のタスク整理",
      "個人制作・サイドプロジェクトの管理",
      "日常のToDo（買い物・用事）の整理"
    ],
    psychologicalFactors: [
      "義務的なToDo管理への抵抗感を下げたい",
      "小さな達成感を可視化してモチベを保ちたい",
      "無機質すぎるUIより親しみやすい見た目を好む",
      "忙しくても短時間で操作を終えたい"
    ]
  },

  font: {
    fontTitle:"Henny Penny",
    description: "『ナイトメア・ビフォア・クリスマス』にインスパイアされたフォントを使用しました。怖すぎず、ポップで親しみやすい印象を重視しました。",
    className: "font-henny"
  },

  illustrationSection: {
    description: `ハロウィンをテーマにしつつ、可愛さを意識したキャラクターを使用して世界観のあるUIで楽しい印象にしました。`,
    illustrations: [
      {
        title: "モーダル時のイラスト",
        image: "/works/kanban-app/ghost.png"
      },
      {
        title: "ログイン時のイラスト",
        image: "/works/kanban-app/pumpkin.png"
      },
      {
        title: "アイコン用イラスト",
        image: "/works/kanban-app/icon.png"
      }
    ]
  },

  colorSection: {
    description: "フリー素材のオレンジのイラストに合わせてメインカラーを選定。背景には黒やグレーを用いて、統一感と視認性を両立しました。",
    colors: [
      {
        name: "メインカラー",
        hex: "#EA5307",
      },
      {
        name: "アクセント",
        hex: "#323232",
      },
      { 
        name: "アクセント",
        hex: "#FFFFFF"
      },
      { 
        name: "アクセント",
        hex: "#E1E1E1"
      },
    ]
  },

  wireframes: [
    "/works/kanban-app/wireframe.png"
  ],

  finalDesign: [
    {
      pageTitle:  {
        en: "Login Page",
        ja: "ログイン画面"
      },
      description:  `ユーザーが最初にアプリと向き合うページとして、「可愛く親しみやすい世界観」を体験できるようにデザインしました。名前を入力すると、カンバンボードのタイトル部分が「〇〇's ToDo List」とパーソナライズされ、自分専用のボードを持っている感覚を演出します。入力エリアやボタンは視認性の高いオレンジで統一し、キャラクターイラストはハロウィンの可愛さを強調することで、心理的なハードルを下げ、ワクワクする第一印象になるよう意識しました。モバイル版でもレイアウトが崩れず、片手で操作しやすいように余白や要素のサイズ感を調整しています。`,

      images: {
       pc:"/works/kanban-app/login_PC.png",
       mobile:"/works/kanban-app/login_mobile.png"
      },
    },
    {
      pageTitle: {
        en: "Main Board Page",
        ja: "メインボード画面"
      },
      description: `タスクの状態を視覚的に管理できるよう、「To Do」「In Progress」「Done」の3カラム構成で、進捗がひと目で確認できるように設計しました。`,
      images: {
        pc:"/works/kanban-app/top_PC.png",
        mobile:"/works/kanban-app/top_mobile.png"
      }
    },
    {
      pageTitle: {
        en: "Modal: Task Detail",
        ja: "タスク詳細モーダル"
      },
      description: `タスクの詳細を確認・編集するためのモーダルは、必要な情報だけをコンパクトにまとめ、視認性と操作性を両立させるように設計しました。上部にはタスクのステータスを表示し、ボタン一つで簡単に進捗を変更できるようにしています。削除ボタンも分かりやすく配置し、操作ミスが起きにくいようにしました。イラストを添えることで、無機質になりがちなタスク管理に遊び心を加え、楽しみながら進められる印象を与えています。モバイル版では、情報が縦方向に整列するよう調整し、片手で操作しやすく、文字がつぶれないサイズ感を意識しています。`,
      images: {
        pc:"/works/kanban-app/modal_PC.png",
        mobile:"/works/kanban-app/modal_mobile.png"
      }
    }
  ]
  },
  // Voting app
  {
    id: 2,
    title: "Voting app",
    description:`WebSocket を活用して開発した、リアルタイム投票アプリです。
    ユーザーは自由に投票テーマを作成でき、参加者の投票が即時に反映されます。
    学校課題として制作し、リアルタイム通信やUI設計の実装スキルを磨きました。`,
    slug: "voting-app",
    image:  "/works/voting-app/top.png",
    modalImage: "/works/voting-app/mobile.png",
    pcImage: "/works/voting-app/pc.png",
    phoneImage:"/works/voting-app/main-mobile.png",
    category: "School Project", 
    duration:"3weeks",
    role: ["UIデザイン" ,"フロントエンド"],
    created: "2024.11",
    tools: [ "Node.js", "WebSockets","MongoDB", "TypeScript", "Astro"],

    overview: `WebSocket を活用して開発した、リアルタイム投票アプリです。ユーザーはログイン後、自由に投票テーマを作成し、他の参加者と共有できます。投票が行われると結果が即座に反映され、全員が同じタイミングで最新状況を確認可能です。UIデザインは8ビット風のドット絵テイストで統一し、視覚的にも楽しめるインタラクティブな設計を意識しました。リアルタイム通信の実装、ユーザー認証、データ同期の仕組みを学びながら構築しました。`,

    purpose: `このアプリは、友人や家族、仲間内で気軽に使えることを目的に制作しました。
    遊びの予定を決めたり、ちょっとしたアンケートを取ったりと、日常の中で「みんなで決める楽しさ」を手軽に体験できます。
    リアルタイムで結果が変わることで、その瞬間の盛り上がりや一体感を共有できるように設計しました。`,

    problem: `友人同士でオンライン上の意思決定を行う際、既存の投票機能やチャットツールでは「結果表示までのタイムラグ」や「視覚的な演出不足」が原因で、盛り上がりに欠けるケースが見られます。Nielsen Norman Group のユーザー行動研究によれば、操作結果は1秒以内に反映されないとユーザーの集中力とモチベーションが低下し、10秒を超えると離脱率が大幅に上がるとされています。また、LINEやGoogleフォームなどの既存サービスでは、”結果表示までの遅延”、”無機質なデザイン”、”投票画面と結果画面が分離しているUI”、などが理由で、参加意欲が低下する傾向があります。特にカジュアルな場面（例：ランチの場所決めや遊びの計画）では、投票そのものが体験として楽しめない課題が残っています。`,

    solution:`これらの課題を解決するため、リアルタイム性・操作の簡潔さ・視覚的楽しさの3点を重視した投票アプリを設計しました。WebSocket を活用し、投票が行われた瞬間に全員の画面へ結果を即時反映。Nielsen Norman Group の「応答時間のUXガイドライン」で推奨される1秒以内のレスポンスを実現し、ユーザーの集中力と参加意欲を維持します。
      UI設計では以下の工夫を取り入れました。

      ワンタップ投票：参加のハードルを下げるシンプルな操作フロー

      結果のリアルタイム可視化：投票後すぐにグラフやアニメーションで変化を提示

      8ビット風ドット絵デザイン：カジュアルな利用シーンに合う遊び心あるビジュアル

      レスポンシブ対応：モバイルやPCなどあらゆる環境で快適に利用可能

      これにより、単なる情報収集ツールではなく、**「投票そのものが楽しい体験」**となるようなUXを提供できました。
      `,

  target: {
    age: "18〜30歳の学生・若手社会人",
    lifestyle: "友人やサークル、同僚などとオンラインでの交流が多く、SNSやチャットツールを日常的に利用している",
    needs: [
      "堅苦しくなく、気軽に使える投票ツールが欲しい",
      "デザイン性があり、話題のきっかけになるサービスを使いたい"
    ],
    useCases: [
      "旅行やイベントの行き先決め",
      "ランチや飲み会の場所選び",
      "趣味仲間との企画内容決定"
    ],
    psychologicalFactors: [
      "意思決定の過程も楽しみたい",
    "仲間との一体感を感じたい"
    ]
  },

  font: {
    fontTitle:"Bungee Inline",
    description: `Bungee Inline は、見出しやタイトルなど目を引く部分に適した、立体感と存在感のあるディスプレイフォントです。
    本アプリでは「投票」という行為を楽しく演出し、友人同士でワイワイ盛り上がる雰囲気を作るために、 playful（遊び心）と bold（大胆さ）を兼ね備えた Bungee Inline を採用しました。

    具体的な理由は以下の通りです。

    視認性の高さ：太めのラインと立体感により、PC・モバイル問わず見出しが目立つ

    楽しさの演出：カジュアルでポップな印象が、8ビット風ドット絵デザインとの相性が良い

    情報の階層化：本文フォントとの差別化により、見出しや重要箇所が直感的に認識できる

    ブランド感の付与：投票アプリの「遊びながら決める」コンセプトを視覚的に補強

    結果として、Bungee Inline は本アプリの「カジュアルで楽しいリアルタイム投票」という体験価値を高める要素として機能しています。`,
    className: "font-bungee"
  },

  illustrationSection: {
    description: `親しみやすく遊び心のある世界観を演出するため、天使・ドラゴン・魔法使いなどファンタジー要素を取り入れたキャラクターをデザインしました。8ビット風のドット絵で統一することで、アプリ全体のレトロゲーム調デザインと調和させています。配色や形状は小さなサイズでも視認性を保てるように工夫し、投票リストなどUI上での識別性を高めました。`,
    illustrations: [
      {
        image: "/works/voting-app/icon1.png"
      },
      {
        image: "/works/voting-app/icon2.png"
      },
      {
        image: "/works/voting-app/icon3.png"
      },
      {
        image: "/works/voting-app/icon4.png"
      },
      {
        image: "/works/voting-app/icon5.png"
      },
    ]
  },

  colorSection: {
    description: `UI全体のベースカラーには黒と白を採用しました。
    キャラクターイラストや背景画像など、画面内で多彩な色を使用しているため、UI要素はあえてモノトーンに統一。
    これにより、投票リストやボタンなどの機能的要素が視覚的に整理され、情報の読み取りやすさを確保しました。
    また、黒と白のコントラストによって、イラストやコンテンツ自体の色がより引き立つデザインとなっています`,
    colors: [
      {
        name: "メインカラー",
        hex: "#000000",
      },
      {
        name: "アクセント",
        hex: "#FFFFFF",
      },
    ]
  },
  wireframes: [
    "/works/voting-app/wireframe.png"
  ],
  finalDesign: [
    {
      pageTitle:  {
        en: "Home",
        ja: "ホーム画面"
      },
      description: `アプリのトップ画面では、ログイン・サインアップボタンと投票リストを配置し、ユーザーがすぐに投票や新規作成を開始できる導線を設計しました。背景には8ビット風の森のイラストを使用し、アプリ全体のレトロゲーム調の世界観を表しました。投票リストにはキャラクターアイコンを添えることで、項目の識別性と楽しさを両立しています。モバイル版ではレイアウトを縦方向に最適化し、ボタンやリストがタップしやすい間隔になるよう調整しました。`,

      images: {
       pc:"/works/voting-app/main.png",
       mobile:"/works/voting-app/main-mobile.png"
      },
    },
    {
      pageTitle: {
        en: "Login Page",
        ja: "ログイン画面"
      },
      description: `ログイン画面は、8ビット調の書斎背景で世界観を表現しつつ、中央に白いカード型のフォームを配置し、入力内容の可読性を最優先に設計しております。強めのボーダーでコントラストを確保し、入力項目は Email と Password の2点に絞ることで、認知負荷を下げ「ログイン → 投票」までの導線を最短化しました。主たるCTAである「Log In」ボタンはカード下部にフル幅で配置し、上部の「Back」および下部のサインアップ誘導（microcopy）により、次の行動が直感的に選択できる構成としております。`,
      images: {
        pc:"/works/voting-app/login.png",
        mobile:"/works/voting-app/login-mobile.png"
      }
    },
    {
      pageTitle: {
        en: "Sign up Page",
        ja: "サインアップ画面"
      },
      description: `サインアップ画面は、レトロゲーム調の森林背景で世界観を表現しつつ、中央に白いカード型フォームを配置して入力内容の可読性を最優先に設計しております。入力項目は Username / E-mail address / Password の3点に絞り、最小ステップで登録を完了できる導線といたしました。ユーザーはあわせてアイコンを選択でき、初回体験で“自分らしさ”を付与できるよう配慮しております。主要CTA「Sign Up」はフル幅・十分な高さで配置し、下部のログイン誘導テキストにより既存ユーザーの回遊もしやすくしております。`,
      images: {
        pc:"/works/voting-app/signup.png",
        mobile:"/works/voting-app/signup-mobile.png"
      }
    },
    {
      pageTitle: {
        en: "Create Vote Page",
        ja: "投票作成画面"
      },
      description: `投票作成画面では、レトロゲーム調の背景の上に白いカード型フォームを中央配置し、入力内容の可読性を最優先に設計しております。フォームは Question／Description／Option の3項目で構成し、必須項目は required を赤字で明示して入力漏れを防止しました。Option は「＋ Create Option」で複数追加でき、不要な項目はゴミ箱アイコンで削除可能とし、最小限の操作回数で投票内容を組み立てられる導線としております。主ボタン Create はカード下部にフル幅で配置し、作成完了までの視線移動を最短化しました。`,
      images: {
        pc:"/works/voting-app/new-vote.png",
        mobile:"/works/voting-app/new-vote-mobile.png"
      }
    },
    {
      pageTitle: {
        en: "Voting Result Page",
        ja: "投票結果画面"
      },
      description: `投票結果画面は、投票の進行状況をリアルタイムに可視化するためのビューです。WebSocket により新しい投票が入った瞬間、各選択肢のバー、票数、割合がリロード不要で即時に更新されます。結果カードは背景のドット絵から十分にコントラストを取り、白地＋強めの枠線で可読性を確保。上部に設問、その下に選択肢を縦並びで配置し、バーの長さと数値（票数／％）を併記することで、色覚によらず変化が読み取りやすい構成にしております。モバイルでは縦方向の余白と行間を広めに取り、スクロールしながらでも現在の優勢が一目で把握できるよう最適化しています。`,
      images: {
        pc:"/works/voting-app/vote.png",
        mobile:"/works/voting-app/vote-mobile.png"
      }
    }
  ]
  },
  // Fridgefy
  {
    id: 3,
    title: "Fridgefy",
    description:`学校のチーム課題として取り組んだ、レシピ検索アプリのデザイン・実装プロジェクトです。
    Fridgefyは、冷蔵庫の中にある食材をもとに、今すぐ作れるレシピを提案するアプリです。
    レシピ詳細では、持っている食材と足りない食材を比較表示でき、献立を決める・買い物をするという日常の課題をサポートします`,
    slug: "fridgefy",
    image:  "/works/Fridgefy/Home.png",
    modalImage: "/works/Fridgefy/fridgefy-mobile.png",
    pcImage: "/works/Fridgefy/fridgefy-pc.png",
    phoneImage:"/works/Fridgefy/login-mobile.png",
    category: "School Project",
    duration:"3weeks",
    role: ["UIデザイン" ,"フロントエンド"],
    created: "2025.01",
    tools: [ "Node.js","React.js", "Tailwind","TypeScript", "Shadcn"],
  
    overview: `Fridgefy は、冷蔵庫にある食材からレシピを検索できるWebアプリです。React.jsとNode.jsを用いて開発されており、ユーザーは自分の冷蔵庫にある食材を登録し、それに合ったレシピを簡単に探すことができます。

    特徴的なのは、「冷蔵庫にあるもの」と「レシピに必要な食材」を比較できる設計です。これにより、不足している材料（＝買うもの）と手元にある材料（＝使えるもの）をひと目で把握することができます。

    料理のジャンルや制限条件（ヴィーガン、グルテンフリーなど）でのフィルタリングは行わず、今ある材料を最大限に活かして「何が作れるか」を提案することに特化したアプリです。`,
  
    purpose: `Fridgefyは、冷蔵庫にある食材を活かして「今すぐ作れるレシピ」を提案することを目的にデザイン・開発されたWebアプリです。
    買い物に行かずに済むような献立を見つけたり、手元の食材を無駄にせず使い切るためのサポートを目指しています。
    本プロジェクトは、ReactとNode.jsを用いたチーム開発の学校課題として取り組んだもので、設計からUI制作・実装までをチームで分担して進めました。`,
  
    problem: `冷蔵庫に食材があるのに、「何を作ればいいのか分からない」という状況は、日常的によく起こります。
    また、レシピサイトは数が多く、目的のレシピにたどり着くまでに時間がかかることも多くあります。

    さらに、レシピを見つけても「どの食材が足りないのか」が一目で分からないため、本当に作れるかどうかの判断が難しく、買い物リストを自分で作る手間が発生してしまいます。
    その結果、せっかく買った食材を使いきれずに余らせてしまい、食材を無駄にしてしまった罪悪感を抱くことも少なくありません。`,
  
    solution:`Fridgefyでは、ユーザーが自分の冷蔵庫にある食材を「My Fridge」に登録することで、それに合ったレシピが自動で表示される仕組みを採用しました。

    さらに、レシピ詳細画面では、「持っている食材」と「足りない食材」が比較表示されるため、
    「今すぐ作れるか？」「買い物が必要か？」が直感的に判断できるようになっています。

    このように、検索・判断・調理までの一連の流れをスムーズにするUX設計によって、
    毎日の献立選びや買い物のストレスを軽減できることを目指しました。`,
  
    target: {
      age: ["18–35"],
      lifestyle:
        "一人暮らしや同居生活をしている学生・若手社会人・共働き世帯。買い物や料理に割ける時間が限られている人。",
      needs: [
        "家にある食材を無駄なく使い切りたい",
        "買い物に行かずに作れる献立をすぐに見つけたい",
        "足りない食材をひと目で把握したい",
        "レシピ検索にかかる時間や手間を減らしたい",
        "スマホでも見やすく、片手で操作できるUIが欲しい"
      ],
      useCases: [
        "仕事や学校から帰宅後に、冷蔵庫の中身から夕食を決める",
        "外出先で買い物前に不足食材を確認する",
        "週末のまとめ買い前に、残っている食材を使い切る献立を探す",

      ],
      psychologicalFactors: [
        "食材を余らせて捨てることへの罪悪感を減らしたい",
        "毎日の献立決めによるストレスを軽くしたい",
        "無駄な出費を減らし節約意識を高めたい",
        "レシピ選びも楽しく、前向きな気持ちで料理したい"
      ]
    },
  
    font: {
      fontTitle:"Inter",
      description: "本デザインでは、ユーザーインターフェース全体に統一感と可読性をもたらすために、Web向けに最適化されたフォント「Inter」を採用しています。シンプルで直感的な操作性を重視したため、余計な装飾を避け、明快な情報設計を目指しました。",
      className: "inter"
    },
  
    illustrationSection: {
      description: `ロゴには手書き風のイラストと文字を使用し、親しみやすさと遊び心を表現しました。フォントは丸みのあるスタイルを使用し、やさしく温かい印象にしました。`,
      illustrations: [
        {
          title: "ロゴ",
          image: "/works/Fridgefy/logo.png"
        }
      ]
    },
  
    colorSection: {
      description: `メインカラーにパステルグリーンを採用し、柔らかく、料理や食材のイメージに合う、自然で安心感のある印象を目指しました。アクセントカラーとしてオレンジを使い、行動（ログイン、検索、追加ボタンなど）を直感的に促します`,
      colors: [
        {
          name: "メインカラー",
          hex: "#A6EFBD",
        },
        {
          name: "アクセント",
          hex: "#EEF4F0",
        },
        { 
          name: "アクセント",
          hex: "#FF9500"
        },
        { 
          name: "アクセント",
          hex: "#4A2500"
        },
      ]
    },
    wireframes: [
      "/works/Fridgefy/wireframe.png"
    ],
    finalDesign: [
      {
        pageTitle:  {
          en: "Login Page",
          ja: "ログイン画面"
        },
        description:  `ブランドイメージを強調したファーストビュー。ビジュアルには立体的なキッチンアイテムを使い、楽しさと温かさを演出。ユーザーにとって親しみやすい第一印象を意識しました。`,
        images: {
         pc:"/works/Fridgefy/Home.png",
         mobile:"/works/Fridgefy/login-mobile.png"
        },
      },
      {
        pageTitle: {
          en: "Home / Recipe List",
          ja: "ホーム画面 / レシピ一覧"
        },
        description: `冷蔵庫にある食材をもとに、作れるレシピを一覧で表示するページです。検索ボックスでは食材名や料理名で絞り込みが可能で、気になるレシピは「Detail」ボタンから詳細を確認できます。ハートアイコンを押すことでお気に入り登録もでき、後から見返しやすくなっています。左の「My Fridge」で現在冷蔵庫にある食材を追加・管理でき、右の「My Recipe」ではお気に入りに登録したレシピを確認できます。`,
        images: {
          pc:"/works/Fridgefy/Recipe-Design.png",
          mobile:"/works/Fridgefy/recipe-mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Favorite List",
          ja: "お気に入り機能"
        },
        description: `気になるレシピを「♡」ボタンでお気に入り登録すると、この「My Recipe」画面に一覧表示されます。
        お気に入りレシピは、後からすぐに見返せるように整理されており、調理の参考や献立決めに役立ちます。
        不要になったレシピは「×」ボタンで簡単に削除可能です。
        スマートフォンではスライドメニューとして表示され、片手でも操作しやすい設計です。`,
        images: {
          pc:"/works/Fridgefy/Recipe-Design.png",
          mobile:"/works/Fridgefy/myrecipe-mobile.png"
        }
      },
      {
        pageTitle: {
          en: "My Fridge",
          ja: "冷蔵庫機能"
        },
        description: `「My Fridge」では、自分の冷蔵庫にある食材を自由に登録できます。登録された食材をもとに、作れるレシピが自動的に表示されるため、買い物に行かずに今あるもので何が作れるかが一目で分かります。食材は入力フォームから追加でき、「×」ボタンで簡単に削除も可能。モバイルではスライド式のメニューで片手操作に最適化されています。`,
        images: {
          pc:"/works/Fridgefy/Recipe-Design.png",
          mobile:"/works/Fridgefy/myfridge-mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Recipe Details",
          ja: "レシピ詳細ページ"
        },
        description: `選択したレシピの材料と作り方を確認できるページです。シンプルな構成で、調理時にも見やすいように配慮しています。`,
        images: {
          pc:"/works/Fridgefy/RecipeDetail.png",
          mobile:"/works/Fridgefy/recipedetail-mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Shopping List",
          ja: "買い物リスト"
        },
        description: `お気に入り登録したレシピを一覧で表示し、必要な材料をまとめて確認できるページです。材料をすぐ確認できるだけでなく、「More Detail」ボタンから作り方ページにもアクセス可能です。冷蔵庫の中身と買い物リストも同時に表示され、効率的にレシピを管理できます。モバイルバージョンではタブ切り替えで「My Fridge」と「My Recipe」を行き来しながら、お気に入りレシピを確認できます。外出先でもレシピと材料をサッと確認でき、買い物中にも便利な設計です。`,
        images: {
          pc:"/works/Fridgefy/shoppinglist.png",
          mobile:"/works/Fridgefy/shoppinglist-mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Item to Buy",
          ja: "食材リスト"
        },
        description: `お気に入りしたレシピから必要な食材が自動で追加されます。買い物中にチェックを入れて管理できる便利なリスト機能です。`,
        images: {
          pc:"/works/Fridgefy/shoppinglist.png",
          mobile:"/works/Fridgefy/item-mobile.png"
        }
      },
    ]
    },

    // Editor
  {
    id: 4,
    title: "Real-Time Document Editor",
    description:`React を用いて開発したリアルタイム共同編集エディタです。
    エディタ基盤に tiptap、同期に Y.js を採用し、入力内容がリロードなしで即時反映されます。`,
    slug: "DocumentEditor",
    image:  "/works/Editor/Home.png",
    // modalImage: "/works/Editor/mobile.png",
    pcImage: "/works/Editor/pc.png",
    // phoneImage:"/works/Editor/top_mobile.png",
    category: "School Project", 
    duration:"3weeks",
    role: ["UIデザイン" ,"フロントエンド"],
    created: "2025.02",
    tools: [ "Node.js", "WebSockets", "Prisma" , "TypeScript", "React.js", "TailwindCSS","tiptap","Y.js"],
  
    overview: "本ツールは、Reactで作ったリアルタイム共同編集エディタです。基盤にtiptap（ProseMirror）を採用し、ツールバーやショートカットなどは拡張で追加しています。同期はY.js＋y-websocketで行い、入力がその場で全員に反映されます。複数人が同時に編集しても、CRDTにより自動で矛盾なくマージされます。編集中インジケータとUndo/Redoに対応しており、離れていても快適に共同作業ができます。",
  
    purpose: "リモート環境でも同じ文書を同時に編集できるようにし、バージョン違い（版ズレ）や重複編集、レビュー待ちを減らすことです。編集内容はすぐに全員へ反映されるため、フィードバックの往復が減り、合意までの時間を短縮します。さらに、誰がどこを編集しているかを可視化し、直感的に操作できるUIにすることで、要件定義書・提案書・議事録・ナレッジの作成を効率化します",
  
    problem: `リモートやハイブリッドの環境では、同じ文書でも人によって内容や版が少しずつズレてしまいがちです。誰がどこを編集しているのかが見えにくく、修正がぶつかったり、レビュー待ちで作業が止まることも多く、最終合意までに時間がかかっていました。`,
  
    solution:`本ツールでは、tiptap を基盤にしたエディタで入力内容がその場で全員に反映されるようにしました。編集中のユーザーや位置を表示し、ツールバーやショートカットなどの拡張で迷わず書ける UI を用意しました。これにより、確認の往復が減り、合意までの時間を短縮しながら、コミュニケーションの手間も抑えられます。`,
  
    target: {
      age: "20代後半〜40代前半の、オンラインで文書を一緒に作ることが多い人たち",
      lifestyle: "チャットやドキュメントツールを日常的に使い、分散チームで仕事を進めている",
      needs: [
        "編集内容がその場で共有されてほしい",
        "重複や版ズレを気にせず書きたい",
        "編集している人や場所が見えると安心"
      ],
      useCases: [
        "企画書・資料の下書きとレビュー",
        "ミーティングのメモ共有",
        "手順書やナレッジの整備"
      ],
      psychologicalFactors: [
        "確認の往復を減らして時短したい",
        "迷わず書けるシンプルなUIが好き",
        "スムーズに合意まで進めたい"
      ]
    },
  
    font: {
      fontTitle:"Inter",
      description: "画面でとにかく読みやすく、小さめの文字でも潰れにくいからです。太さの種類が多いので見出しと本文のメリハリも付けやすく、癖のないニュートラルな見た目がカラフルなイラストやUIの邪魔をしません。",
      className: "Inter"
    },
  
    illustrationSection: {
      description: `ビジネス利用を想定しているため、信頼感と協働性が伝わるヒーローイラストを採用しました。青系を基調とした落ち着いた配色は安心・誠実の印象を与える色を採用しました。`,
      illustrations: [
        {
          title: "ヒーローイラスト",
          image: "/works/Editor/illustration.png"
        }
      ]
    },
  
    colorSection: {
      description: `ビジネスで信頼感と落ち着きが伝わりやすく、可読性が高いため、青系を採用しました。白やグレーと相性がよく、見出し・リンク・CTAの階層化もしやすい。色覚多様性にも配慮しやすく、採用したイラストや Inter のニュートラルトーンとも一貫性が取れます。`,
      colors: [
        {
          name: "メインカラー",
          hex: "#3A6FE5",
        },
        {
          name: "アクセント",
          hex: "#F8F8F8",
        },
        { 
          name: "アクセント",
          hex: "#FFFFFF"
        },
      ]
    },
    wireframes: [
      "/works/Editor/wireframe.png"
    ],
    finalDesign: [
      {
        pageTitle:  {
          en: "Home",
          ja: "ホーム画面"
        },
        description:  `左に大きくプロダクト名「DocEdit」を配置し、右に共同編集を想起させるイラストを置いて、最初の数秒で“何のツールか”を伝えます。配色は信頼感のある青系で統一し、主動線は中央下の Sign up / Login の2CTAに集約しました。十分な余白とInterの読みやすいタイポグラフィで視線を「ロゴ → タイトル → CTA」へ自然に誘導し、初見でも迷わず次の行動を選べる構成にしています。`,
  
        images: {
         pc:"/works/Editor/home.png",
        //  mobile:"/works/Editor/home.png"
        },
      },
      {
        pageTitle: {
          en: "Main Board Page",
          ja: "メインボード画面"
        },
        description: `中央の「New Document」「Favorite List」から“作る／よく使うを見る”にすぐ進め、下段は最近のドキュメントをカードで一覧化（「View all」で全件表示）。ヘッダーにナビとアカウントを置き、余白多め＋Interで見やすく、モバイルは1列に最適化しています。`,
        images: {
          pc:"/works/Editor/mainboard.png",
          // mobile:"/works/kanban-app/top_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Favorite List",
          ja: "お気に入り画面"
        },
        description: `Favorite List は、お気に入り登録したドキュメントへすぐアクセスするための画面です。
        カード型の一覧で タイトル・作成者・メニュー（…） を表示し、その場からすぐに開けます。`,
        images: {
          pc:"/works/Editor/favoritelist.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Edit page",
          ja: "編集画面"
        },
        description: `Edit page（編集画面）は、中央にリッチテキストエディタ、上部にドキュメント名と共有ボタン、右側に共同編集中のメンバー表示を配置しています。太字・斜体・リスト・リンク・画像などの基本操作はツールバーからすぐ使えます。変更はリアルタイムに同期され、誰がどこを編集しているかが一目でわかるため、会議中でもそのまま共同作業を進められます。`,
        images: {
          pc:"/works/Editor/Editpage.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      }
    ]
  },
  // ShareHouse
  {
    id: 5,
    title: "Share House Finder",
    description:`RoomieGo は、バンクーバー在住の留学生や新生活を始める居住者を対象に、物件の検索から掲載、入居希望者とのやり取りまでを一括で行えるシェアハウス総合プラットフォームです。複合条件フィルターによる効率的な検索機能、お気に入りリスト、チャット機能を備え、物件探しから契約前のコミュニケーションまで、このアプリ一つで完結します。`,
    slug: "sharehouse",
    image:  "/works/sharehouse/top.png",
    // modalImage: "/works/kanban-app/mobile.png",
    pcImage: "/works/sharehouse/pc.png",
    // phoneImage:"/works/kanban-app/top_mobile.png",
    category: "School Project", 
    duration:"2 month",
    role: ["UIデザイン" ,"フロントエンド"],
    created: "2025.03-05",
    tools: [ "Node.js", "MongoDB", "Prisma" , "TypeScript", "React.js", "Shadcn", "TailwindCSS"],
  
    overview: `RoomieGo は、バンクーバーに暮らす留学生や新生活を始める居住者が、理想のシェアハウスを効率的かつ安全に見つけられることを目的とした総合型プラットフォームです。海外生活では、信頼できる住まい探しと円滑な契約前のやり取りが大きな課題となります。本アプリはその課題を解決するため、物件の検索から掲載、入居希望者とのコミュニケーションまでを一元化しました。ユーザーは家賃、エリア、入居条件、設備、滞在期間などの詳細な条件を組み合わせて検索でき、気になる物件はお気に入りリストで整理して比較できます。オーナーは新規物件の登録や条件設定に加え、部屋の間取りを直感的に作成できる平面図作成ツールを利用することで、視覚的にも分かりやすい情報提供が可能です。さらに、入居希望者とオーナーはアプリ内のチャット機能を通じて直接やり取りでき、問い合わせから内覧調整、契約前の確認までをスムーズに進められます。検索、掲載、コミュニケーション、情報の視覚化までをワンストップで実現することで、住まい探しの不安と手間を最小限に抑え、ユーザー体験の向上を目指しました。`,
  
    purpose: `バンクーバーで生活を始める留学生や新生活者にとって、住まい探しは最初に直面する大きな課題です。現地の物件情報は複数のプラットフォームや掲示板に分散しており、条件検索や信頼性の判断が難しいだけでなく、オーナーとの連絡方法も統一されていません。本アプリは、これらの課題を解消し、物件の検索から掲載、契約前のやり取りまでを一元化することで、住まい探しを効率的かつ安心して行える環境を提供することを目的としています。さらに、オーナーにとっても平面図作成ツールや入居条件設定機能を通じて物件の魅力をわかりやすく伝えられる仕組みを用意し、双方にとって利便性の高いプラットフォームを目指しました`,
  
    problem: `バンクーバーでの住まい探しは、情報が複数の掲示板やSNSに分散しているため、条件に合う物件を効率的に見つけることが困難です。掲載情報には詳細や写真が不足している場合も多く、物件の間取りや設備条件が不明確なまま判断せざるを得ないケースが少なくありません。さらに、連絡手段が統一されていないため、オーナーとのやり取りに時間がかかり、入居の可否や条件確認までに複数のやり取りが必要になるという非効率さも課題となっていました。`,
  
    solution:`本アプリでは、物件の検索から掲載、入居希望者とのやり取りまでを一つのプラットフォーム上で完結できる仕組みを提供しました。ユーザーは複合条件フィルターを用いて家賃、エリア、入居条件、設備などを組み合わせた精度の高い検索が可能です。オーナーは平面図作成ツールや詳細情報入力フォームにより、視覚的かつ正確に物件情報を伝えられます。また、アプリ内チャット機能によって、問い合わせから内覧調整、契約条件の確認までをスムーズに進めることができ、従来の分散的かつ非効率なやり取りを大幅に改善しました。`,
  
    target: {
      age: ["18-30"], 
      lifestyle: "海外留学・ワーキングホリデーでバンクーバーに滞在中、限られた予算と期間で生活基盤を整えたい層",
      needs: [
        "家賃やエリアを条件で絞り込みたい",
        "信頼できる物件情報を効率的に探したい",
        "オーナーとのやり取りをアプリ内で完結させたい",
        "入居条件や間取りを明確に把握したい"
      ],
      useCases: [
        "新規渡航直後に短期間で住まいを決めたいとき",
        "滞在期間の延長や引っ越しの際の物件探し",
        "友人やカップルで住める物件を探す",
        "オーナーとして新規入居者を募集する"
      ],
      psychologicalFactors: [
        "初めての海外生活で住まい探しに不安がある",
        "複数のサイトを見比べる時間や労力を減らしたい",
        "写真や間取りで生活のイメージを明確にしたい",
        "信頼できるやり取り環境で契約前の不安を解消したい"
      ]
    },

    font: [
      {
        fontTitle: "Bowldyone",
        description: "ブランドロゴ部分には『Bowldy One』を使用。太めで視認性が高く、力強さと存在感を演出しました。",
        className: "font-bowldyone"
      },
      {
        fontTitle: "Poppins",
        description: "ページやセクションの見出しには『Poppins』を採用。モダンで読みやすく、親しみやすい印象を演出しました。",
        className: "font-poppins"
      }
    ],
  
    colorSection: {
      description: `親しみやすく温かみのある印象を与えることを目的に、メインカラーには鮮やかなオレンジを採用しました。留学生や新生活者が安心して利用できる雰囲気を演出しつつ、視認性とアクセント効果を兼ね備えています。サブカラーには落ち着いたブルーを取り入れ、信頼感と情報の整理性を強化。背景にはメインのオレンジに合わせた黄味よりの白を使用し、読みやすく統一感を持たせました。`,
      colors: [
        {
          name: "メインオレンジ",
          hex: "#FFB93A"
        },
        {
          name: "サブブルー",
          hex: "#1E3A8A"
        },
        {
          name: "背景ホワイト",
          hex: "#FFFAF0"
        },
        {
          name: "ブラウン",
          hex: "#5D4037"
        },
      ]
    },

    wireframes: [
      "/works/sharehouse/wireframe1.png",
      "/works/sharehouse/wireframe2.png"
    ],

    finalDesign: [
      {
        pageTitle:  {
          en: "Main Board Page",
          ja: "メインボード画面"
        },
        description:  `メインボード画面では、ユーザーがシェアハウス物件を一覧で確認し、条件に合った住まいを効率的に探すことができます。画面左側には家賃、エリア、入居条件、設備などの複合フィルターを配置し、ユーザーは希望条件を細かく設定して検索結果を絞り込むことが可能です。中央エリアにはカード形式の物件一覧が表示され、価格、所在地、お気に入り登録ボタンをワンクリックで操作できます。右側には「Favorite List」を設置し、保存した物件を即座に確認・比較できるようにしました。このレイアウトにより、条件設定・検索結果の確認・お気に入りの比較を同一画面で完結でき、ユーザーがページ遷移することなくスムーズに物件を選定できるUXを実現しています。`,
  
        images: {
         pc:"/works/sharehouse/top.png",
        //  mobile:"/works/kanban-app/login_mobile.png"
        },
      },
      {
        pageTitle: {
          en: "Main Board Page(map)",
          ja: "メインボード画面（地図表示）"
        },
        description: `メインボード画面の地図表示モードでは、検索条件に合致するシェアハウス物件を地図上で直感的に確認できます。左側のフィルターパネルで家賃、エリア、入居条件、設備などを設定すると、中央の地図上に該当物件の位置と価格がマーカーとして表示されます。これにより、ユーザーは物件の立地や周辺環境を視覚的に把握しながら候補を比較できます。右側には「Favorite List」を常時表示し、保存済み物件を即座に確認・検討できるようにしています。この地図表示モードは、エリアや交通アクセスを重視するユーザーに特に有効であり、物件情報と位置情報を同一画面で確認できることで、住まい探しの効率と利便性を大きく向上させます。`,
        images: {
          pc:"/works/sharehouse/map.png",
          // mobile:"/works/sharehouse/map.png"
        }
      },
      {
        pageTitle: {
          en: "House Detail",
          ja: "詳細画面"
        },
        description: `詳細画面では、選択したシェアハウス物件の情報を一括で確認できます。物件名、家賃、所在地、部屋の広さ、入居可能日、設備などの基本情報に加え、オーナーが作成した間取り図や周辺地図を表示し、立地や間取りを直感的に把握できるようにしています。コメント欄では、オーナーはもちろん、現在入居中のルームメイトにも直接質問することができ、住み心地や家の雰囲気など、写真やスペックだけでは分からないリアルな情報を得られます。投稿されたコメントからは、物件の雰囲気や住環境の特徴を把握することができます。地図には物件周辺のバス停やスーパーなどの生活関連施設が表示され、それぞれ徒歩何分で到達できるかが一目でわかるようになっています。これにより、生活の利便性を具体的にイメージしやすくし、物件選びの判断材料をより充実させました。情報閲覧、間取り確認、周辺環境チェック、オーナーやルームメイトとのコミュニケーションまでをワンストップで提供することで、契約判断に必要な情報を効率的に収集できる設計としています。`,
        images: {
          pc:"/works/sharehouse/HouseDetail.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Sign Up Page",
          ja: "サインアップページ"
        },
        description: `サインアップページでは、ユーザーが「オーナー（Landlord）」として物件を掲載するのか、「入居希望者（Tenant）」として物件を探すのかを最初に選択します。オーナーを選択した場合は、物件情報や条件を登録できる専用の掲載フォームへ遷移し、間取り図作成ツールや入居条件設定などの管理機能を利用できます。入居希望者を選択した場合は、希望条件に合った物件を検索・お気に入り登録・オーナーやルームメイトとのチャット機能が使える利用者画面へ進みます。このステップを設けることで、異なる利用目的に合わせたUI/UXを提供でき、ユーザーは最短の動線で必要な機能にアクセス可能となっています。オーナーと入居希望者それぞれのニーズを明確に分離することで、操作の迷いを減らし、サービスの利用効率を高めました。`,
        images: {
          pc:"/works/sharehouse/Signup.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Reservation Page",
          ja: "予約ページ"
        },
        description: `予約ページでは、入居希望者が物件の内覧や契約に向けた訪問日程をオーナーへ直接リクエストできます。フォームでは氏名、電話番号、希望日程（最大3日分）、任意のメッセージを入力でき、送信後はオーナー側の管理画面やチャットルームに通知されます。必須項目を明確にし、カレンダー入力機能を備えることで、入力ミスや日程の重複を防止。任意メッセージ欄を設けることで、事前に特別な条件や質問を共有でき、内覧当日のスムーズな対応を可能にします。この予約ページにより、アプリ内で物件の検索から詳細確認、オーナーとのやり取り、内覧予約までのプロセスを一元化し、外部サービスを利用せず完結できるUXを実現しました。`,
        images: {
          pc:"/works/sharehouse/ReservationForm.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Reservation List Page(tenat)",
          ja: "予約管理ページ（テナント）"
        },
        description: `テナント用の予約管理ページでは、自分が申し込んだ内覧予約のステータスを一目で確認できます。左側の「Waiting List」には、オーナーの承認待ちの予約が表示され、日時や物件名を確認可能です。右側の「Reservation List」には、承認済みの予約が一覧化され、確定した日時で内覧の予定を管理できます。各予約カードには削除ボタンがあり、予定変更やキャンセルを簡単に行うことができます。承認待ちと承認済みを明確に分けた2カラム構成により、ユーザーは自分の予約状況を直感的に把握しやすくなっています。このページを通じて、テナントは複数の物件に並行して内覧申請を行いながら、確定済みのスケジュールを整理でき、住まい探しの効率を高められます。`,
        images: {
          pc:"/works/sharehouse/reservation.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Admin Page",
          ja: "家管理ページ"
        },
        description: `オーナー管理画面では、自分が掲載している物件の状態を一覧で管理できます。物件カードには、家賃、所在地、ステータス（「For Rent」「Rented」など）が表示され、現在の募集状況を一目で把握できます。各物件カードには「Detail」ボタンがあり、詳細編集ページへ移動して情報の更新や写真の差し替えが可能です。また、画面上部の「Create New House」ボタンから新規物件の登録を行うことができます。募集中と成約済みの物件を視覚的に区別することで、管理ミスや情報の更新漏れを防ぎ、効率的な掲載運営を実現しています。オーナーはこの画面から、物件の登録・更新・募集停止を一括して操作でき、掲載管理の手間を最小限に抑えることができます。`,
        images: {
          pc:"/works/sharehouse/Admin page.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "House Edit Page",
          ja: "編集画面"
        },
        description: `編集画面では、オーナーが物件情報を登録・更新できます。上部では物件の写真を複数枚アップロードでき、外観や部屋の様子を視覚的に伝えることが可能です。物件名、所在地、家賃、入居可能日、滞在期間、設備条件、入居制限などの詳細情報をフォームで入力でき、必要に応じて即時に変更が反映されます。特徴的な機能として、ドラッグ＆ドロップ操作で間取り図を作成できる平面図ツールを搭載。部屋や設備の配置を直感的に描画できるため、入居希望者は文字情報だけでなく視覚的にも物件を把握できます。また、地図機能を使って物件周辺のバス停やスーパーなど生活関連施設を表示し、徒歩での所要時間も設定可能です。この編集画面によって、オーナーは物件情報の魅力を最大限に引き出しつつ、入居希望者に必要な情報を正確かつ分かりやすく提供できます。結果として、掲載から契約までのプロセスを短縮し、成約率向上にも貢献します。`,
        images: {
          pc:"/works/sharehouse/House Edit page.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "House Edit Page(Modal)",
          ja: "編集画面(モーダル)"
        },
        description: `編集画面のモーダルは、平面図作成ツールの使い方をガイドするためのヘルプ機能です。モーダル内では、部屋や家具の追加、サイズ変更、配置の調整などの操作手順を図解付きで説明し、初めて利用するオーナーでも直感的に間取り図を作成できるようにしています。また、ツールの各アイコンやボタンの機能も併せて解説し、操作ミスや迷いを減らす設計としました。編集画面上に直接表示されることで、ユーザーはページを離れることなく説明を確認しながら作業を進められます。このガイドモーダルによって、平面図作成ツールの習熟度を高め、物件情報の視覚的な訴求力を向上させることができます。結果として、入居希望者にとって理解しやすく魅力的な物件ページの作成を支援します。`,
        images: {
          pc:"/works/sharehouse/House Edit Page(description modal).png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Reservation List Page (landlord)",
          ja: "予約管理画面（オーナー）"
        },
        description: `オーナー用の予約管理ページでは、各物件に対する内覧予約の進捗を一覧で確認・操作できます。画面上部のタブから管理対象の物件を切り替えられ、選択中の物件に関する予約が3つのリストに分かれて表示されます。Waiting List には承認待ちの予約が並び、各予約に対して「Confirm」ボタンから即時承認が可能です。Reservation List には承認済みの内覧予定が表示され、日程や入居希望者の情報を確認できます。Tenant Contract List には契約が成立した入居者が記録され、契約済みの物件管理を行えます。予約のステータスを視覚的に分けた3カラム構成により、オーナーは現在の募集状況と内覧スケジュールを直感的に把握し、効率的に物件運営を進められます。また、1画面で複数物件の予約状況を切り替えて確認できるため、管理負担を軽減し、スムーズな意思決定を支援します。`,
        images: {
          pc:"/works/sharehouse/Reservation list(landlord).png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Chat page",
          ja: "チャット画面"
        },
        description: `入居希望者やオーナーがリアルタイムでやり取りできるチャット機能です。画面左側にグループチャット（Group Chat）と個別チャット（DM）の一覧が表示され、参加中のチャットルームをすぐに切り替えられます。中央のチャット画面では、ユーザー名とメッセージが吹き出し形式で表示され、下部の入力フォームから新しいメッセージを送信できます。送信は即時反映され、スムーズなコミュニケーションを実現します。物件の内覧予約や契約に関する細かな調整、入居後の問い合わせ対応などを1つの画面で行えるため、他の連絡ツールを使う必要がなく、やり取りの履歴も一元管理できます。`,
        images: {
          pc:"/works/sharehouse/Chat.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
      {
        pageTitle: {
          en: "Account setting page",
          ja: "アカウント設定画面"
        },
        description: `ユーザーがプロフィール情報を編集できるページです。プロフィール画像、ユーザー名、自己紹介文、メールアドレスをフォーム形式で入力・更新できます。「Upload」ボタンからプロフィール画像を変更可能で、「Save Changes」ボタンで変更内容を保存します。誤って更新した場合に備えて「Cancel」ボタンを設置し、さらにアカウント削除用の「Delete My account」ボタンも赤色で明確に表示しています。この画面はユーザーの個人情報管理の中心的役割を担い、直感的なUIでスムーズな操作が可能です。`,
        images: {
          pc:"/works/sharehouse/Account setting.png",
          // mobile:"/works/kanban-app/modal_mobile.png"
        }
      },
    ]
  },

  // // Portfolio
  // {
  //   id: 6,
  //   title: "Portfolio Site",
  //   description:`このカンバンアプリは、TypeScriptを使用してチームで協力して開発したプロジェクトです。私は主にUIデザインを担当し、ハロウィンが近かったことから、季節感を取り入れたハロウィンデザインを採用しました。タスクの整理や管理を楽しく行えるよう工夫をしました。`,
  //   slug: "Portfolio",
  //   image:  "/works/kanban-app/top_PC.png",
  //   modalImage: "/works/kanban-app/mobile.png",
  //   pcImage: "/works/Portfolio/pc.png",
  //   phoneImage:"/works/kanban-app/top_mobile.png",
  //   category: "School Project", 
  //   duration:"3weeks",
  //   role: ["UIデザイン" ,"フロントエンド"],
  //   created: "2025.02",
  //   tools: [ "Node.js", "WebSockets","Prisma" , "TypeScript", "React.js"],
  
  //   overview: "本プロジェクトは、チーム開発で行ったハロウィンをテーマにしたカンバン方式のToDoアプリです。Astro, tailwind, TypeScriptなどを用い、ドラッグ＆ドロップ機能やモーダル、検索機能などの実装を行いました。レスポンシブにも対応し、モバイルユーザーにも使いやすい設計を意識しました。",
  
  //   purpose: "タスク管理をもっと楽しく、気軽にできるようにすることを目的としました。義務的に感じやすいToDo管理に、可愛いデザインを取り入れることで、心理的なハードルを下げ、継続して使いたくなるような体験を提供します。",
  
  //   problem: `既存のタスク管理アプリ（TrelloやJiraなど）は、チームでの業務利用や複雑なプロジェクト管理に適した高機能な設計となっています。
  // しかし、16〜25歳の学生や若手社会人など、個人で日常的なToDo管理をしたいユーザーにとっては、機能が多すぎてハードルが高く感じられることがあります。
  // また、業務向けのシンプルなデザインや無機質なUIが中心で、「かわいくて気軽に使える」ようなツールを求めている層にとっては親しみにくさが残ると考えました。`,
  
  //   solution:`上記の課題に対して、学生や若手社会人でも気軽に使える、シンプルで親しみやすいタスク管理アプリを目指して、カンバン方式のUIを作成しました。
  
  //   タスクは「ToDo」「In Progress」「Done」の3つのステータスに分類され、進捗状況を一目で把握できるカラムレイアウトを採用。
  // ドラッグ＆ドロップ操作でタスクを移動できることで、操作に不慣れなユーザーでも直感的に使えるよう工夫しています。
  
  // また、名前を入力して自分専用のボードとして使えるパーソナライズ機能や、ハロウィン風のイラスト、柔らかい色合いのデザインなどを取り入れ、日常的に使いたくなる「かわいくて親しみやすい」世界観を表現しました。`,
  
  //   target: {
  //     age:"16〜25歳の学生・若手社会人",
  //     needs:"可愛くて、気軽に使える日常的なToDoアプリを求めるユーザー"
  //   },
  
  //   font: {
  //     fontTitle:"Henny Penny",
  //     description: "『ナイトメア・ビフォア・クリスマス』にインスパイアされたフォントを使用。怖すぎず、ポップで親しみやすい印象を重視。",
  //     className: "font-henny"
  //   },
  
  //   illustrationSection: {
  //     description: `ハロウィンをテーマにしつつ、可愛さを意識したキャラクターを使用して世界観のあるUIで楽しい印象にしました。`,
  //     illustrations: [
  //       {
  //         title: "モーダル時のイラスト",
  //         image: "/works/kanban-app/ghost.png"
  //       },
  //       {
  //         title: "ログイン時のイラスト",
  //         image: "/works/kanban-app/pumpkin.png"
  //       },
  //       {
  //         title: "アイコン用イラスト",
  //         image: "/works/kanban-app/icon.png"
  //       }
  //     ]
  //   },
  
  //   colorSection: {
  //     description: "フリー素材のオレンジのイラストに合わせてメインカラーを選定。背景には黒やグレーを用いて、統一感と視認性を両立しました。",
  //     colors: [
  //       {
  //         name: "メインカラー",
  //         hex: "#EA5307",
  //       },
  //       {
  //         name: "アクセント",
  //         hex: "#323232",
  //       },
  //       { 
  //         name: "アクセント",
  //         hex: "#FFFFFF"
  //       },
  //       { 
  //         name: "アクセント",
  //         hex: "#E1E1E1"
  //       },
  //     ]
  //   },
  //   wireframes: [
  //     "/works/kanban-app/wireframe.png"
  //   ],
  //   finalDesign: [
  //     {
  //       pageTitle:  {
  //         en: "Login Page",
  //         ja: "ログイン画面"
  //       },
  //       description:  `ユーザーが最初にアプリと向き合うページとして、「可愛く親しみやすい世界観」を体験できるようにデザインしました。名前を入力すると、カンバンボードのタイトル部分が「〇〇's ToDo List」とパーソナライズされ、自分専用のボードを持っている感覚を演出します。入力エリアやボタンは視認性の高いオレンジで統一し、キャラクターイラストはハロウィンの可愛さを強調することで、心理的なハードルを下げ、ワクワクする第一印象になるよう意識しました。モバイル版でもレイアウトが崩れず、片手で操作しやすいように余白や要素のサイズ感を調整しています。`,
  
  //       images: {
  //        pc:"/works/kanban-app/login_PC.png",
  //        mobile:"/works/kanban-app/login_mobile.png"
  //       },
  //     },
  //     {
  //       pageTitle: {
  //         en: "Main Board Page",
  //         ja: "メインボード画面"
  //       },
  //       description: `タスクの状態を視覚的に管理できるよう、「To Do」「In Progress」「Done」の3カラム構成で、進捗がひと目で確認できるように設計しました。`,
  //       images: {
  //         pc:"/works/kanban-app/top_PC.png",
  //         mobile:"/works/kanban-app/top_mobile.png"
  //       }
  //     },
  //     {
  //       pageTitle: {
  //         en: "Modal: Task Detail",
  //         ja: "タスク詳細モーダル"
  //       },
  //       description: `タスクの詳細を確認・編集するためのモーダルは、必要な情報だけをコンパクトにまとめ、視認性と操作性を両立させるように設計しました。上部にはタスクのステータスを表示し、ボタン一つで簡単に進捗を変更できるようにしています。削除ボタンも分かりやすく配置し、操作ミスが起きにくいようにしました。イラストを添えることで、無機質になりがちなタスク管理に遊び心を加え、楽しみながら進められる印象を与えています。モバイル版では、情報が縦方向に整列するよう調整し、片手で操作しやすく、文字がつぶれないサイズ感を意識しています。`,
  //       images: {
  //         pc:"/works/kanban-app/modal_PC.png",
  //         mobile:"/works/kanban-app/modal_mobile.png"
  //       }
  //     }
  //   ]
  // },
];
