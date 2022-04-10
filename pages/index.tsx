import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { HeaderComponent } from "./components/Header/HeaderComponent";
import { MainComponent } from "./components/Main/MainComponent";

const Home: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
    </>
  );
};

export default Home;
