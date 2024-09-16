export type TNews = {
  id: number;
  image: string;
  day: number;
  month: string;
  title: string;
  description: string;
  category: string;
  comments: number;
};
export const newsData: TNews[] = [
  {
    id: 1,
    image: "https://i.ibb.co.com/cggPF50/Image-5.png",
    day: 18,
    month: "Nov",
    title: "Curabitur porttitor orci eget neque accumsan venenatis.",
    description: "Nunc fermentum.",
    category: "Food",
    comments: 65,
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/y04Y9J9/Image-3.png",
    day: 29,
    month: "Jan",
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper.",
    description: "Pharetra semper, feugiat.",
    category: "Food",
    comments: 65,
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/fdv9pLK/Image-4.png",
    day: 21,
    month: "Feb",
    title: "Maecenas blandit risus elementum mauris malesuada.",
    description: "Risus elementum.",
    category: "Food",
    comments: 65,
  },
];
