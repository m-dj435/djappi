// import { Main } from "../components/Main";

import { Product } from "../components/Product";
import styles from "../styles/Home.module.css";
//<div className={styles.container}>

const DATA = {
  title: `Tytuł`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          suscipit imperdiet quam id congue. Pellentesque tristique et massa vel
          consequat. Aliquam erat volutpat. Aenean id auctor orci. Donec aliquam
          lacus nec ante sollicitudin, non auctor est euismod. Sed elementum,
          elit eu molestie interdum, eros ligula dictum justo, et ultricies
          tortor ipsum a orci. Phasellus in tempor massa. Maecenas imperdiet
          neque vitae cursus pretium. Curabitur suscipit sit amet augue nec
          sodales. Suspendisse potenti. Ut in lorem a enim placerat maximus nec
          quis libero. Praesent magna lorem, tempor eu laoreet sit amet,
          efficitur a leo. Fusce vitae eros leo. Nunc dignissim metus at lacus
          porttitor bibendum. Donec tristique eget nunc vel dapibus. Quisque
          laoreet mauris eu tincidunt lacinia.`,
  thumbnailUrl: `https://picsum.photos/200/300`,
  thumbnailAlt: `opis - zdjecie losowe`,
  rating: 3.3,
  category: `losowe zdjecie`,
};

export default function Home() {
  return (
    <div className="grid md:grid-cols-1 gap-2">
      <Product dataObject={DATA} />
    </div>
  );
}
