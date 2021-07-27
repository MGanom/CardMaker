import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import styles from './Maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const setCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={setCard}
          updateCard={setCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
