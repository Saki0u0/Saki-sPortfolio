import AboutSubnavResponsive from "@/components/about/profile/AboutSubnavResponsive";
import Header from "@/components/ui/header";
import Image from "next/image";

const frontend = [
  { src: "/about/skills/html.svg", alt: "html", title: "HTML" },
  { src: "/about/skills/css.svg", alt: "css", title: "CSS" },
  { src: "/about/skills/Javascript.svg", alt: "javascript", title: "JavaScript" },
  { src: "/about/skills/jquery.svg", alt: "jquery", title: "jQuery" },
  { src: "/about/skills/react.svg", alt: "react", title: "React" },
  { src: "/about/skills/next-js.svg", alt: "nextjs", title: "Next.js" },
  { src: "/about/skills/node.svg", alt: "nodejs", title: "Node.js" },
  { src: "/about/skills/typescript.svg", alt: "typescript", title: "TypeScript" },
];

const styling = [
  { src: "/about/skills/boostrap.svg", alt: "bootstrap", title: "Bootstrap" },
  { src: "/about/skills/sass.svg", alt: "sass", title: "Sass" },
  { src: "/about/skills/tailwind.svg", alt: "tailwind", title: "Tailwind" },
  { src: "/about/skills/pencil.svg", alt: "shadcn", title: "Shadcn" },
];

const cms = [
  { src: "/about/skills/astro.svg", alt: "astro", title: "Astro" },
  { src: "/about/skills/wordpress.svg", alt: "wordpress", title: "Wordpress" },
  { src: "/about/skills/laptop.svg", alt: "gsap", title: "GSAP" },
];

const tools = [
  { src: "/about/skills/github-pink.svg", alt: "github", title: "GitHub" },
  { src: "/about/skills/figma.svg", alt: "figma", title: "Figma" },
  { src: "/about/skills/photoshop.svg", alt: "photoshop", title: "Photoshop" },
];

const SkillSection = ({
  title,
  data,
}: {
  title: string;
  data: typeof frontend;
}) => (
  <div className="w-[90%] mb-12 mx-auto">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-8">
      {data.map((skill) => (
        <div
          key={skill.title}
          className=" flex items-center text-center text-xl text-gray-800"
        >
          <Image
            src={skill.src}
            alt={skill.alt}
            width={40}
            height={40}
            className="mb-2 mr-4"
          />
          <span>{skill.title}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <div>
          <Header/>
          <div className="mt-24 md:w-[80%] mx-auto w-[96%] ">
            <h2 className="title text-5xl mb-10 tracking-widest">Skills</h2>
            <div className="bg-white md:items-center rounded-2xl md:p-10 py-8 px-4 shadow-sm w-[96%] md:w-[90%]  mx-auto">
              <div className="space-y-12 text-2xl font-sans overflow-y-auto h-[54vh]">
                <SkillSection title="Frontend" data={frontend} />
                <SkillSection title="Styling" data={styling} />
                <SkillSection title="CMS" data={cms} />
                <SkillSection title="Tool" data={tools} />
              </div>
            </div>
          </div>
          <AboutSubnavResponsive />
        </div>
  )
}