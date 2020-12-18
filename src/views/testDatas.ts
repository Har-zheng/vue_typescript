export interface ColumnProps {
  id: number,
  title: string,
  description: string,
  avatar: string
}
export interface PostProps {
  id: string,
  title: string,
  content: string,
  image?: string,
  createdAt: string,
  columnId: string,
}
export const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这里是专栏一 ，一个有趣的简介',
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这里是专栏二 ，一个有趣的简介',
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这里是专栏二 ，一个有趣的简介',
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这里是专栏二 ，一个有趣的简介',
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg'
  }
]