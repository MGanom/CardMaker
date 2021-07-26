import React from 'react';
import CardAdd from '../cardadd/CardAdd';
import CardEdit from '../cardedit/CardEdit';
import styles from './Editor.module.css';

const Editor = ({ cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {Object.keys(cards).map(key => (
      <CardEdit
        key={key}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAdd onAdd={addCard} />
  </section>
);

export default Editor;
