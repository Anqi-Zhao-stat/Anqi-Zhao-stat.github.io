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
          title: "publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching experience and instructional activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "Other resources or class materials",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "news-i-presented-my-poster-at-the-2026-graduate-student-research-symposium-at-north-carolina-state-university",
          title: 'I presented my poster at the 2026 Graduate Student Research Symposium at North...',
          description: "",
          section: "News",},{id: "news-i-am-selected-as-a-recipient-of-the-william-h-swallow-fellowship-award-for-the-2025-2026-academic-year-at-north-carolina-state-university",
          title: 'I am selected as a recipient of the William H. Swallow Fellowship Award...',
          description: "",
          section: "News",},{id: "news-i-am-invited-to-present-at-the-international-chinese-statistical-association-icsa-in-arlington-virginia-during-the-session-responsible-statistics-and-ai-methods-for-health-applications",
          title: 'I am invited to present at the International Chinese Statistical Association (ICSA) in...',
          description: "",
          section: "News",},{id: "news-i-will-present-a-15-minute-talk-at-the-joint-statistical-meetings-jsm-2026-in-boston-during-the-session-statistical-learning-and-data-science",
          title: 'I will present a 15-minute talk at the Joint Statistical Meetings (JSM) 2026...',
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
