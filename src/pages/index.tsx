import React from "react";
import { render } from "minista";
import Title from "@/components/Title";
import Picture from "@/components/Picture";


const Home = () => {
  return render(
    <>
      <Title title="タイトルです" />
      <Picture
        webp={true}
        srcPc="./assets/img/noimage.png"
        srcSp="./assets/img/noimage.png"
        alt=""
        width={50}
        height={100}
        loadingLazy={true}
      />
    </>
  );
};

export default Home;
