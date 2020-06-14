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
          next: 1,
          move: "STOP",
        },
      ],
    },
  ],
};

export const numberSubstractor = {
  alphabet: ["0", "-", "C", "X"],
  memoryTape: [
    "0",
    "0",
    "0",
    "C",
    "0",
    "0",
    "0",
    "0",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ],
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
          new: "C",
          next: 5,
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
          current: "X",
          new: "X",
          next: 2,
          move: "R",
        },
        {
          current: "0",
          new: "X",
          next: 3,
          move: "L",
        },
      ],
    },
    {
      stateNumber: 3,
      symbolActions: [
        {
          current: "X",
          new: "X",
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
          current: "X",
          new: "X",
          next: 5,
          move: "R",
        },
        {
          current: "0",
          new: "0",
          next: 6,
          move: "L",
        },
      ],
    },
    {
      stateNumber: 6,
      symbolActions: [
        {
          current: "X",
          new: "-",
          next: 6,
          move: "STOP",
        },
      ],
    },
  ],
};

export const numberAdder = {
  alphabet: ["0", "C", "X", "-"],
  memoryTape: [
    "0",
    "0",
    "C",
    "0",
    "0",
    "0",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ],
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

export const numberAdder2 = {
  alphabet: ["0", "C", "X", "-"],
  memoryTape: ["0", "0", "0", "0", "C", "0", "0", "0", "-", "-", "-", "-", "-"],
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
