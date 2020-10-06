const Score = (() => {
  let score = 0;
  let hp;

  const getScore = () => score;

  const getHP = () => hp;

  const incScore = (points) => {
    score += points;
    return `${score}`;
  };

  const resetScore = () => {
    score = 0;
    return `${score}`;
  };

  return {
    getScore,
    incScore,
    resetScore,
    getHP,
  };
})();

export default Score;