function getHint(secret: string, guess: string): string {
  const counter = { bull: 0, cow: 0 };
  const mapS = new Array(10).fill(0);
  const mapG = new Array(10).fill(0);

  for (let index = 0; index < guess.length; index++) {
    const guessChar = guess[index];
    if (guessChar === secret[index]) counter.bull++;
    else {
      mapG[guessChar]++;
      mapS[secret[index]]++;
    }
  }

  counter.cow = mapS.reduce((p, v, i) => {
    return p + Math.min(v, mapG[i]);
  }, 0);
  return `${counter.bull}A${counter.cow}B`;
}
console.log(getHint("111", "101"));
