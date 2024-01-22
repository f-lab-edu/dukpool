export type ArticleProps = {
  title: string;
  userProfile: {
    name: string;
    image: string | null;
  };
  content: string;
  image: string | null;
  date: string;
  id: number;
  likeCount: string;
  commentCount: string;
};

export type TalkProps = {
  title: string;
  userProfile: {
    name: string;
    image: string | null;
  };
  image: string | null;
  content: string;
  date: string;
  id: number;
  likeCount: string;
  commentCount: string;
};

export type ArticlePostProps = {
  title: string;
  userProfile: {
    name: string;
    image: string | null;
  };
  images: string[];
  tags: string[];
  content: string;
  date: string;
  id: number;
  likeCount: string;
  comments: {
    users: {
      id: number;
      name: string;
      image: string | null;
      date: string;
      content: string;
    }[];
  };
};

export type TalkPostProps = {
  title: string;
  userProfile: {
    name: string;
    image: string | null;
  };
  images: string[];
  tags: string[];
  content: string;
  date: string;
  id: number;
  likeCount: string;
  comments: {
    users: {
      id: number;
      name: string;
      image: string | null;
      date: string;
      content: string;
    }[];
  };
};

export const MOCK_ARTICLE_POST_DATA: ArticlePostProps = {
  title: '마블 피규어 소개드립니다!',
  userProfile: {
    name: '마블덕후짱',
    image:
      'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
  },
  images: [
    'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
  ],
  tags: ['마블', '아이언맨'],
  content:
    '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요. 얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
  date: '2024-01-01',
  id: 1,
  likeCount: '13',
  comments: {
    users: [
      {
        id: 33,
        name: '나도마블좋아',
        image: null,
        date: '2024-01-03',
        content: '진짜 멋있네요 저도 갖고싶어요.',
      },
      {
        id: 3,
        name: '하이하이',
        image: null,
        date: '2024-01-04',
        content: '어디서 사셨어요?? 정보 좀 공유해주세요~!',
      },
    ],
  },
};

export const MOCK_TALK_POST_DATA: TalkPostProps = {
  title: '마블 피규어 소개드립니다!',
  userProfile: {
    name: '마블덕후짱',
    image:
      'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
  },
  images: [
    'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
  ],
  tags: ['마블', '아이언맨', '피규어'],
  content: '요즘 피규어 하나에 얼마정도 하나요?',
  date: '2024-01-01',
  id: 1,
  likeCount: '13',
  comments: {
    users: [
      {
        id: 33,
        name: '나도마블좋아',
        image: null,
        date: '2024-01-03',
        content: '요즘 비싼건 100만원 훌쩍 넘어요!',
      },
      {
        id: 3,
        name: '하이하이',
        image: null,
        date: '2024-01-04',
        content: '마블 피규어는 좀 더 비싸요 ㅠㅠ',
      },
    ],
  },
};

export const MOCK_ARTICLE_DATA: ArticleProps[] = [
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image: 'https://visla.kr/wp/wp-content/uploads/2022/07/20220709_00.jpg',
    date: '2024-01-01',
    id: 1,
    likeCount: '11',
    commentCount: '45',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 2,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 3,
    likeCount: '15',
    commentCount: '1',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 4,
    likeCount: '13',
    commentCount: '64',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 5,
    likeCount: '23',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 6,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 7,
    likeCount: '13',
    commentCount: '14',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 8,
    likeCount: '1',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 9,
    likeCount: '13',
    commentCount: '24',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 10,
    likeCount: '13',
    commentCount: '44',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 11,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 12,
    likeCount: '0',
    commentCount: '42',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 13,
    likeCount: '13',
    commentCount: '43',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 14,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 15,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 16,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 17,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 18,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 19,
    likeCount: '13',
    commentCount: '4',
  },
];

export const MOCK_TALK_DATA: TalkProps[] = [
  {
    title: '마블피규어',
    userProfile: {
      name: '아이언맨최고',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content: '백화점에서 샀어요',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 1,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: 'asdqw',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 2,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 3,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블akskskskskskskskskskskskskafdfasdfsfssksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 4,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 5,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 6,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 7,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요. 얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 8,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 9,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 10,
    likeCount: '13',
    commentCount: '44',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 11,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 12,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 13,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 14,
    likeCount: '13',
    commentCount: '4',
  },
  {
    title: '마블aksksksksksksksksksksksksksksksks',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    content:
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 15,
    likeCount: '13',
    commentCount: '4',
  },
];
