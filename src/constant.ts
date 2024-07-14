export const CONSTANT = {
  default: {
    subject: {
      speed: 15,
      color: "#fb8500",
      width: 20,
      height: 20,
    },
    canvas: {
      dimensions: [window.innerWidth, window.innerHeight] as const,
    },
  },
  // TODO : Implement the following commands
  // Implemented : clear
  maxHistoryCmds: 5,
  cmds: {
    help: {
      description: "List all available commands",
      usage: "help",
      example: "help",
    },
    list: {
      description: "List all available commands",
      usage: "list",
      example: "list",
    },
    clear: {
      description: "Remove all tasks",
      usage: "clear",
      example: "clear",
      run: (element: HTMLDivElement) => {
        element.innerHTML = "";
      },
    },
    reset: {
      description: "Refresh the application",
      usage: "reset",
      example: "reset",
    },
    genMap: {
      description: "Generate a map",
      usage: "genMap",
      example: "genMap",
    },
  },
} as const;
