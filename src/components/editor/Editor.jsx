import React from 'react';
import CardAdd from '../cardadd/CardAdd';
import CardEdit from '../cardedit/CardEdit';
import styles from './Editor.module.css';

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {cards.map(card => (
      <CardEdit card={card} />
    ))}
    <CardAdd onAdd={addCard} />
  </section>
);

export default Editor;
