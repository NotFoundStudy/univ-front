const COMMON_CONST = {
  WHOLE_MENU_KEY: {
    INTRODUCTION_RESEARCH: 'Introduction & Research',
    PROFESSOR: 'Professor',
    MEMBER: 'Member',
    PUBLICATION: 'Publication',
    LECTURE: 'Lecture',
    COMMUNITY: 'Community',
  },
  WHOLE_MENU: [
    {
      icon: '',
      title: 'Introduction\n & Research',
      key: 'Introduction & Research',
      subMenu: [
        {
          icon: '',
          title: 'Introduction',
          key: '/introduction',
          subMenu: []
        },
        {
          icon: '',
          title: 'Research',
          key: '/introduction/research',
          subMenu: []
        }
      ]
    },
    //2
    {
      icon: '',
      title: 'Professor',
      key: 'Professor',
      subMenu: [
        {
          icon: '',
          title: 'Professor',
          key: '/professor',
          subMenu: []
        },
      ]
    },
    //3
    {
      icon: '',
      title: 'Member',
      key: 'Member',
      subMenu: [
        {
          icon: '',
          title: 'Current Member',
          key: '/member/current',
          subMenu: []
        },
        {
          icon: '',
          title: 'Alumni',
          key: '/member/alumni',
          subMenu: []
        }
      ]
    },
    //4
    {
      icon: '',
      title: 'Publication',
      key: 'Publication',
      subMenu: [
        {
          icon: '',
          title: 'Publication',
          key: '/publication',
          subMenu: []
        }
      ]
    },
    //5
    {
      icon: '',
      title: 'Lecture',
      key: 'Lecture',
      subMenu: [
        {
          icon: '',
          title: 'list',
          key: '/lecture',
          subMenu: []
        }
      ]
    },
    //6
    {
      icon: '',
      title: 'Community',
      key: 'Community',
      subMenu: [
        {
          icon: '',
          title: 'Notice',
          key: '/community/notice',
          subMenu: []
        },
        {
          icon: '',
          title: 'Gallery',
          key: '/community/gallery',
          subMenu: []
        },
        {
          icon: '',
          title: 'Board',
          key: '/community/board',
          subMenu: []
        },
      ]
    },
  ],
}

export default COMMON_CONST;