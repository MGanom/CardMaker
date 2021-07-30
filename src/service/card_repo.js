import { firebaseDatabase } from './firebase';

class CardRepo {
  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on('value', snapshot => {
      snapshot.val() && onUpdate(snapshot.val());
    });
    return () => ref.off();
  }

  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepo;
