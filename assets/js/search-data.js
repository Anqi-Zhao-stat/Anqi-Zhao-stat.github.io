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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
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
        },{id: "post-can-you-see-the-sunset-the-way-i-do",
        
          title: "Can you see the sunset the way I do?",
        
        description: "Adorable",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/sunset/";
          
        },
      },{id: "post-her-first-christmas",
        
          title: "Her first Christmas",
        
        description: "Adorable",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/christmas/";
          
        },
      },{id: "post-the-eight-crimes-of-the-cat",
        
          title: "The Eight Crimes of the Cat",
        
        description: "An official record of the eight transgressions committed by the feline entity known as Catzilla.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/8crimes/";
          
        },
      },{id: "post-catzilla-v-s-human",
        
          title: "Catzilla v.s. Human",
        
        description: "An ancient struggle between the feline overlord and its human caretaker.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/videos/";
          
        },
      },{id: "post-the-sealing-of-the-demon",
        
          title: "The Sealing of the Demon",
        
        description: "The gates were closed, yet the power remained.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hospital/";
          
        },
      },{id: "post-the-coming-of-the-cat",
        
          title: "The Coming of the Cat",
        
        description: "She was not chosen. She was unleashed.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/catcome/";
          
        },
      },{id: "post-the-first-omen",
        
          title: "The First Omen",
        
        description: "A cat was born, and the house was no longer silent.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/catface/";
          
        },
      },{id: "news-and-it-came-to-pass-that-a-small-creature-was-brought-forth-into-the-world-and-mischief-was-made-flesh",
          title: 'And it came to pass that a small creature was brought forth into...',
          description: "",
          section: "News",},{id: "news-and-the-cat-crossed-the-threshold-and-dwelt-among-us-and-every-quiet-place-was-claimed-as-her-own",
          title: 'And the Cat crossed the threshold and dwelt among us, and every quiet...',
          description: "",
          section: "News",},{id: "news-and-the-cat-was-delivered-unto-the-healers-and-her-path-was-altered-yet-her-dominion-remained",
          title: 'And the Cat was delivered unto the healers, and her path was altered,...',
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
