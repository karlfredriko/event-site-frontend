export interface IActivity {
  name: string;
  id: number;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  text: {
    blockOne: string;
    blockTwo: string;
  };
}
