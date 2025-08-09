export const CELL_TYPES = {
  WALL: "W",
  PATH: " ",
  SORCERER: "S",
  ORB: "O",
  RED_COOKIE: "R",
  GREEN_COOKIE: "G",
  PINK_COOKIE: "P",
  TRAP: "K",
  PORTAL: "T",
  SCROLL: "M"
};

export const MAZE_LEVELS = [
  // Level 1 - Tutorial
  [
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "S", " ", " ", "G", " ", "O", " ", "P", "W"],
    ["W", " ", "W", "W", " ", "W", "W", "W", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", " ", "O", " ", "W", "W", "W", "W"],
    ["W", "P", " ", " ", "W", " ", " ", "G", "O", "W"],
    ["W", " ", "W", "W", "W", "W", "W", "W", " ", "W"],
    ["W", "O", " ", " ", "G", " ", " ", " ", "T", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W"]
  ],
  // Level 2 - More challenging
  [
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "S", " ", "K", " ", "O", " ", "R", " ", "P", "O", "W"],
    ["W", "W", "W", " ", "W", "W", "W", " ", "W", "W", " ", "W"],
    ["W", "G", " ", " ", " ", "O", " ", " ", " ", " ", " ", "W"],
    ["W", " ", "W", "W", "W", " ", "W", "W", "W", "W", " ", "W"],
    ["W", " ", " ", "K", " ", " ", " ", "K", " ", " ", " ", "W"],
    ["W", "W", "W", " ", "W", "T", "W", " ", "W", "W", "W", "W"],
    ["W", "O", " ", " ", "W", " ", "W", " ", " ", "G", "O", "W"],
    ["W", " ", "W", " ", " ", " ", " ", " ", "W", "W", " ", "W"],
    ["W", "P", " ", " ", "W", "M", "W", " ", " ", " ", "T", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"]
  ]
];

export const FORTUNES = [
  "A forgotten memory stirs in the depths of your mind...",
  "Through the mists of time, you glimpse a familiar face.",
  "The dragon's shadow grows longer, but so does your courage.",
  "Ancient magic whispers secrets of your past.",
  "A fragment of your lost power awakens within.",
  "The maze guides you closer to your true self.",
  "Stars align to light your path forward.",
  "Your quest draws the attention of ancient forces.",
  "Each step brings clarity to your clouded memories.",
  "The echoes of your past grow stronger.",
  "Trust in your magical instincts.",
  "A powerful revelation awaits you."
];

export const SCROLL_MESSAGES = [
  "The dragon fears the ancient runes of binding.",
  "Portals can be your escape in times of danger.",
  "Green cookies restore more health when you're below half.",
  "The dragon's magic weakens near the sacred orbs.",
  "Ancient sorcerers used portals to outmaneuver their foes."
];

export const POWER_EFFECTS = {
  BAD: {
    name: "Dragon's Curse",
    description: "Your health slowly drains...",
    duration: 5000,
    damage: 5
  },
  GOOD: {
    name: "Healing Aura",
    description: "Your wounds are mending!",
    duration: 3000,
    heal: 10
  },
  TRAP: {
    name: "Magic Trap",
    description: "Ancient magic strikes!",
    damage: 20
  }
};
