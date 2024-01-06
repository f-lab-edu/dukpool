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
    image:
      'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MzM3ODU4NTU2NTY4Nzc1/marveldisney.jpg',
    date: '2024-01-01',
    id: 1,
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
      '얼마전에 백화점에서 구매한 마블 피규어들입니다. 100만원 정도 쓴것같아요.',
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
    id: 1,
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
