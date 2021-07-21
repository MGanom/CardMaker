import React from 'react';
import CardEdit from '../cardedit/CardEdit';
import styles from './Editor.module.css';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {cards.map(card => (
      <CardEdit card={card} />
    ))}
  </section>
);

export default Editor;
