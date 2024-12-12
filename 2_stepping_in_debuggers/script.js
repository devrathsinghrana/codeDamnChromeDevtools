const logSomething = () => {
  const a = 100;
  b();
};

const b = () => {
  const c = 150;
  d();
};

const d = () => {
  const e = 200;
  f();
};

const f = () => {
  console.log("Done!;");
};