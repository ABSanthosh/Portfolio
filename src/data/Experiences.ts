export const RESUME_PATH =
  "https://github.com/ABSanthosh/Portfolio/raw/sveltekit/src/data/Resume.pdf";

export interface IExperience {
  position: string;
  company: string;
  desc: string;
  shortDesc: string;
  start: Date;
  end: Date;
  slug: string;
}
const Experiences: IExperience[] = [
  {
    position: "Development Lead",
    company: "Google Developer Student Club",
    desc: "Manage all the development activities of the club and teach a cohort of 30+ students about Web development and Mobile development.",
    shortDesc: "Led a team, taught students and wrote code",
    start: new Date("2022-06"),
    end: new Date("2023-08"),
    slug: "gdsc",
  },
  {
    position: "Freelance Web Developer",
    company: "Fresh From Farm",
    desc: "Built an admin panel for a startup company to manage their products and orders and a website for their customers to place orders.",
    shortDesc: "Classic dashboard for a startup",
    start: new Date("2022-12"),
    end: new Date("2023-02"),
    slug: "fresh-from-farm",
  },
  {
    position: "PHP Intern",
    company: "GameNation",
    desc: "Designed and built production level modules for a platform with 20k+ page visits per day along with scrapers for machine learning.",
    shortDesc: "Built production level modules",
    start: new Date("2022-06"),
    end: new Date("2022-08"),
    slug: "game-nation",
  },
  {
    position: "JavaScript Intern",
    company: "Synergy Hi-Tech Designers",
    desc: "Built and hosted a website for a startup company and helped them get recognized by Govt. of India.",
    shortDesc: "Built and hosted a website",
    start: new Date("2021-08"),
    end: new Date("2021-10"),
    slug: "synergy",
  },
  {
    position: "Web Dev team Lead",
    company: "ECell SNU",
    desc: "Lead a team of 6 web developers to build a website for a inter University Entrepreneurship event.",
    shortDesc: "Built heavy traffic website for an event",
    start: new Date("2022-04"),
    end: new Date("2023-08"),
    slug: "ecell",
  },
  {
    position: "Web Dev team Lead",
    company: "Surge",
    desc: "Leading a team of web developers and designers to build a website that manages everything from registration to payment for the annual sports event.",
    shortDesc: "Built a website for an annual sports event",
    start: new Date("2022-07"),
    end: new Date("2022-11"),
    slug: "surge",
  },
];

export default Experiences;
