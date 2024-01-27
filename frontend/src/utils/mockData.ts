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

export type SearchDataProps = {
  tags: string[];
  articles: ArticlePostProps[];
  talks: TalkPostProps[];
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

export const MOCK_ARTICLE_DATA: ArticlePostProps[] = [
  {
    title: '마블 피규어 소개드립니다!asdasdasdasdasdasdasd',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    images: [
      'https://as2.ftcdn.net/v2/jpg/01/59/55/57/1000_F_159555795_xlMGpGlglQeqTCsdRgciIRVXHZNI4ahr.jpg',
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
  },
  {
    title:
      '마블 피규어 소개드립니다!asdasdasdasdasdasdasd 마블 피규어 소개드립니다!',
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export const MOCK_TALK_DATA: TalkPostProps[] = [
  {
    title: '마블 피규어 소개드립니aasdasdasdasdasdasdasdadasdas다!',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    images: [
      'https://as2.ftcdn.net/v2/jpg/01/59/55/57/1000_F_159555795_xlMGpGlglQeqTCsdRgciIRVXHZNI4ahr.jpg',
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
  },
  {
    title: '마블 피규어 소개드립니다!',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    images: [
      'https://png.pngtree.com/thumb_back/fh260/background/20210703/pngtree-long-striped-blue-flower-wedding-watercolor-rose-background-image_735788.jpg',
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    title: '마블 피규어 소개드립니다!',
    userProfile: {
      name: '마블덕후짱',
      image:
        'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
    },
    images: [
      'https://as2.ftcdn.net/v2/jpg/01/59/55/57/1000_F_159555795_xlMGpGlglQeqTCsdRgciIRVXHZNI4ahr.jpg',
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
  },
];

export const MOCK_SEARCH_DATA: SearchDataProps = {
  tags: ['마블'],
  articles: [
    {
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
    },
    {
      title: '올라프 인형 모음입니다 ㅎㅎ',
      userProfile: {
        name: '마블덕후짱',
        image:
          'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
      },
      images: [
        'https://moomootr4389.cdn-nhncommerce.com/data/goods/21/05/11/31420/31420_Main.jpg',
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
    },
    {
      title: '진격의 거인 피규어 삼',
      userProfile: {
        name: '마블덕후짱',
        image:
          'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
      },
      images: [
        'https://qi-o.qoo10cdn.com/goods_image_big/3/9/8/3/8937073983_l.jpg',
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
    },
    {
      title: '토르망치 보실분',
      userProfile: {
        name: '마블덕후짱',
        image:
          'https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg',
      },
      images: ['https://newsimg.sedaily.com/2016/07/11/1KYTPU7P6Y_2.jpg'],
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
    },
  ],
  talks: [
    {
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
    },
    {
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
    },
    {
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
    },
  ],
};
