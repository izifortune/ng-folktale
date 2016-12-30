const Box = x => ({
  chain: f => f(x),
  ap: other => other.map(x),
  traverse: (of, f) => f(x).map(Box),
  map: f => Box(f(x)),
  fold: (f) => f(x),
  inspect: () => `Box(${x})`
});

export default Box;
