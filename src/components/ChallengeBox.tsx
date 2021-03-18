import styles from '../styles/Components/ChallengeBox.module.css';
import { useContext, useState } from 'react';
import { ChallengesContext } from '../servers/context/ChallengesContext';
import { CountdownContext } from '../servers/context/CountdownContext';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext,
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown;
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src="./icons/body.svg" alt="" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              className={styles.challengeFailedButton}
              type='button'
              onClick={handleChallengeFailed}
            >
              Errei
            </button>

            <button 
            className={styles.challengeSucceededButton}
            type='button'
            onClick={handleChallengeSucceded}
            >
              Acertei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um cilco para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level acertando as perguntas.
          </p>
        </div>
      )}
    </div>
  );
}
