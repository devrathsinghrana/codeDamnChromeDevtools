const logSomething = (logType) => {
  switch (logType) {
    case "INFO":
      console.log("Hello");
      break;
    case "WARN":
      console.warn("Hello");
      break;
    case "ERROR":
      console.error("Hello");
      break;
    case "TABLE":
      console.table([
        {
          first: "Dev",
          last: "Rana",
        },
        {
          first: "Mrunal",
          last: "Sita",
        },
      ]);
      break;
    default:
      console.warn("Select valid log option!");
  }
};
