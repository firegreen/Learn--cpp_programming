import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} >
      <HomepageHeader />
      <main>
      <div className={styles.mainContent}>

          Sur ce site, vous trouverez le cours de programmation C++ destiné à l’enseignement des IMAC1 de l’Universisté Gustave-Eiffel.
          <br/>
          Ce cours ne demande aucun prérequis ni d'expérience précédente en programmation, que ce soit en C++ ou un autre language.
          <br/>
          Si vous ne faites pas partie des étudiants IMAC 1, vous êtes tout de même les bienvenus.
 
          <h2> Qui suis-je ? </h2>

          Je m'appelle Enguerrand DE SMET et je suis actuellement programmeur à Ubisoft depuis maintenant 2ans.

          Je suis de la promotion IMAC 2021, et j'ai également effectué le double-cursus Master Informatique proposé en dernière année de cursus IMAC.

          En ce qui concerne l'enseignement, j'ai d'abord commencé à donner du soutien en programmation aux IMAC1 pendant 2ans pour reprendre cette année en tant que professeur de C++ pour les IMAC1.

          Je fais de mon mieux pour vous accompagner et vous présenter les notions de la manière la plus claire possible.

          Cependant, je suis encore un enseignant novice et vos retours et commentaires sont donc plus que bienvenus (de même si j'étais expérimenté d'ailleurs) et je serai heureux d'adapter mes cours à vos besoins dans la mesure du possible !

          N'hésitez pas à me contacter directement via Discord ou par mail.
          Mes coordonnées sont disponibles dans le pied de page.
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/Lessons">
            C'est parti
          </Link>
        </div>
      </main>
    </Layout>
  );
}
