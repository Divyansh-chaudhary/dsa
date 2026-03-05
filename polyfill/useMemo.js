let prevDep = undefined;
let cache = undefined;
const useMemo = (fun, dep) => {
  prevDep = prevDep === undefined ? dep : prevDep;

  if (cache === undefined) {
    cache = fun();
    return cache;
  }

  for (let i = 0; i < prevDep.length; i++) {
    if (prevDep[i] !== dep[i]) {
      cache = fun();
      prevDep = dep;
      break;
    }
  }

  return cache;
};

const data = 2;
const state = useMemo(() => {
  return 1 + data;
}, [data]);
