// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching experience and instructional activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-i-passed-the-statistical-theory-exam-at-the-ph-d-level-at-uw-department-of-statistics",
          title: 'I passed the Statistical Theory exam at the Ph.D. level at UW department...',
          description: "",
          section: "News",},{id: "news-i-passed-the-first-year-ph-d-qualifying-exam-at-ncsu-department-of-statistics",
          title: 'I passed the first-year Ph.D. Qualifying exam at NCSU department of Statistics!!',
          description: "",
          section: "News",},{id: "news-i-have-officially-declared-professor-jungeum-kim-as-my-ph-d-advisor",
          title: 'I have officially declared Professor Jungeum Kim as my Ph.D. advisor!!!',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
