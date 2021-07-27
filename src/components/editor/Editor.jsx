import React from 'react';
import CardAdd from '../cardadd/CardAdd';
import CardEdit from '../cardedit/CardEdit';
import styles from './Editor.module.css';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {Object.keys(cards).map(key => (
      <CardEdit
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAdd onAdd={addCard} FileInput={FileInput} />
  </section>
);

export default Editor;
