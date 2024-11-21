const logSomething = (logType) => {
  switch (logType) {
    case "INFO":
      console.log("Hello normal");
      break;
    case "WARN":
      console.warn("Hello warning");
      break;
    case "ERROR":
      console.error("Hello error");
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
    case "GROUP":
      const label = "Adolescent Hey";
      console.group(label);
      console.info("Leo");
      console.info("Mike");
      console.groupEnd(label);
      break;
    case "CUSTOM":
      const spacing = "5px";
      const styles = `padding:${spacing};background-color:darkblue;color:white;font-style:italic;border:${spacing} solid crimson;font-size:2em;`;
      console.log("%cEternal soul.", styles);
      break;
    case "ERROR-404":
      fetch("https://abckuchbhi.com");
      break;
    case "VIOLATION":
      console.debug("Hello verbose error!");
      const duration = 3000;
      const start = new Date().getTime();
      while (new Date().getTime() < start + duration) {
        // block the main thread for 3 seconds
      }
      break;
    default:
      console.warn("Select valid log option!");
  }
};
