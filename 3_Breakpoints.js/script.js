function f() {
  console.log("Done!;");
  if (Math.random() > 0.5) {
    // crash the code
    try {
      throw new Error("Well the luck is not with us!");
    } catch (error) {
      console.log("Prevented an oopsie!");
    }
  }
}

f();
