import ghPages from "gh-pages";

ghPages.publish(
  "dist",
  {
    branch: "gh-pages",
    repo: "https://github.com/ABSanthosh/ABSanthosh",
    user: {
      name: "ABSanthosh",
      email: "a.b.santhosh02@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
