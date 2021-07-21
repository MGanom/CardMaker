import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import styles from './Maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Moon',
      company: 'MoonCorp',
      theme: 'light',
      title: 'FrontEnd Developer',
      email: 'chewy111@naver.com',
      message: 'Code for Horde',
      fileName: 'none',
      fileURL: null,
    },
    {
      id: '2',
      name: 'MoonGa',
      company: 'MoonCorp',
      theme: 'colorful',
      title: 'FrontEnd Developer',
      email: 'chewy111@naver.com',
      message: 'Code for Horde',
      fileName: 'none',
      fileURL: null,
    },
    {
      id: '3',
      name: 'MoonGanom',
      company: 'MoonCorp',
      theme: 'dark',
      title: 'FrontEnd Developer',
      email: 'chewy111@naver.com',
      message: 'Code for Horde',
      fileName: 'none',
      fileURL: null,
    },
  ]);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
