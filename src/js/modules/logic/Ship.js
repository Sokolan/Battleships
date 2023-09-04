const Ship = (length) => {
  const mLength = length;
  let mNumberOfHits = 0;

  const hit = () => {
    mNumberOfHits += mNumberOfHits < mLength ? 1 : 0;
  }

  const isSunk = () => mNumberOfHits === mLength;

  return {
    hit,
    isSunk,
  }
}

export default Ship;