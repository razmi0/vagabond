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
} as const;
