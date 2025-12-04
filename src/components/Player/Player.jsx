import { useState } from 'react';

import classes from './Player.module.css';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const [p1hasClearedNameOnce, setP1hasClearedNameOnce] = useState(false);
  const [p2hasClearedNameOnce, setP2hasClearedNameOnce] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }

    if (playerName === 'Player 1' && !p1hasClearedNameOnce) {
      setP1hasClearedNameOnce(true);
      setPlayerName('');
    } else if (playerName === 'Player 2' && !p2hasClearedNameOnce) {
      setP2hasClearedNameOnce(true);
      setPlayerName('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className={classes.playerName}>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className={classes.activePlayer}>
      <div className={classes.playerDetails}>
        <li className={isActive ? 'active' : undefined}>
          <span className={classes.player}>
            {editablePlayerName}
            <span className={classes.playerSymbol}>{symbol}</span>
          </span>
          <button type='submit' onClick={handleEditClick} className={classes.submitButton}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </li>
      </div>
    </form>
  );
}