const Player = (() => {
  let name = '';
  const setName = (newName) => {
    name = newName;
    return `${name}`;
  };

  const getName = () => name;

  return {
    setName,
    getName,
  };
})();

export default Player;