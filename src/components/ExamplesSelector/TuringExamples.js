export const simpleTest = {
  memoryTape: ["-", "1", "0", "1", "1", "0", "-"],
  alphabet: ["1", "0", "-"],
  instructionsTable: [
    {
      stateNumber: 0,
      symbolActions: [
        {
          current: "0",
          new: "1",
          next: 1,
          move: "R",
        },
        {
          current: "-",
          new: "-",
          next: 0,
          move: "R",
        },
        {
          current: "1",
          new: "1",
          next: 0,
          move: "R",
        },
      ],
    },
    {
      stateNumber: 1,
      symbolActions: [
        {
          current: "1",
          new: "0",
          next: 0,
          move: "R",
        },
        {
          current: "0",
          new: "1",
          next: 0,
          move: "R",
        },
        {
          current: "-",
          new: "-",
          next: "STOP",
          move: "-",
        },
      ],
    },
  ],
};

export const binaryAdder = {
  alphabet: ["1", "0", "-"],
  memoryTape: ["-", "0", "0", "1", "0", "-", "0", "0", "1", "1"],
  instructionsTable: [
    {
      stateNumber: 0,
      symbolActions: [
        {
          current: "-",
          new: "-",
          next: 1,
          move: "R",
        },
      ],
    },
    {
      stateNumber: 1,
      symbolActions: [
        {
          current: "0",
          new: "0",
          next: 1,
          move: "R",
        },
        {
          current: "1",
          new: "1",
          next: 1,
          move: "R",
        },
        {
          current: "-",
          new: "-",
          next: 2,
          move: "L",
        },
      ],
    },
    {
      stateNumber: 2,
      symbolActions: [
        {
          current: "1",
          new: "0",
          next: 2,
          move: "L",
        },
        {
          current: "0",
          new: "1",
          next: "STOP",
          move: "L",
        },
      ],
    },
  ],
};

export const numberAdder = {
  alphabet: ["0", "C", "X", "-"],
  memoryTape: ["0", "0", "C", "0", "0", "0", "-"],
  instructionsTable: [
    {
      stateNumber: 0,
      symbolActions: [
        {
          current: "0",
          new: "X",
          next: 1,
          move: "R",
        },
        {
          current: "C",
          new: "-",
          next: 5,
          move: "STOP",
        },
      ],
    },
    {
      stateNumber: 1,
      symbolActions: [
        {
          current: "0",
          new: "0",
          next: 1,
          move: "R",
        },
        {
          current: "C",
          new: "C",
          next: 2,
          move: "R",
        },
      ],
    },
    {
      stateNumber: 2,
      symbolActions: [
        {
          current: "0",
          new: "0",
          next: 2,
          move: "R",
        },
        {
          current: "-",
          new: "0",
          next: 3,
          move: "L",
        },
      ],
    },
    {
      stateNumber: 3,
      symbolActions: [
        {
          current: "0",
          new: "0",
          next: 3,
          move: "L",
        },
        {
          current: "C",
          new: "C",
          next: 4,
          move: "L",
        },
      ],
    },
    {
      stateNumber: 4,
      symbolActions: [
        {
          current: "0",
          new: "0",
          next: 4,
          move: "L",
        },
        {
          current: "X",
          new: "X",
          next: 0,
          move: "R",
        },
      ],
    },
    {
      stateNumber: 5,
      symbolActions: [
        {
          current: "-",
          new: "-",
          next: 5,
          move: "-",
        },
      ],
    },
  ],
};
