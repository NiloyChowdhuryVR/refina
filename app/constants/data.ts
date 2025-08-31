type NumberImage = {
  number: number;
  numberPrompt: string;
};

export const numberOfImages: NumberImage[] = [
  {
    number: 1,
    numberPrompt: `
**STRICT INSTRUCTION: GENERATE EXACTLY 1 IMAGE.**

- **Quantity:** Produce exactly one (1) image.
- **Format:** The image must be a standalone output. Do not merge it into a collage, grid, or panel.
- **Output:** The result must be a single, distinct image file.`
  },
  {
    number: 2,
    numberPrompt: `
**STRICT INSTRUCTION: GENERATE EXACTLY 2 IMAGES.**

- **Quantity:** Produce exactly two (2) separate images.
- **Format:** Each image must be a standalone output. Do not merge them into a collage, grid, or panel.
- **Output:** The result must be two (2) distinct, individual image files.`
  },
  {
    number: 3,
    numberPrompt: `
**STRICT INSTRUCTION: GENERATE EXACTLY 3 IMAGES.**

- **Quantity:** Produce exactly three (3) separate images.
- **Format:** Each image must be a standalone output. Do not merge them into a collage, grid, or panel.
- **Output:** The result must be three (3) distinct, individual image files.`
  },
  {
    number: 4,
    numberPrompt: `
**STRICT INSTRUCTION: GENERATE EXACTLY 4 IMAGES.**

- **Quantity:** Produce exactly four (4) separate images.
- **Format:** Each image must be a standalone output. Do not merge them into a collage, grid, or panel.
- **Output:** The result must be four (4) distinct, individual image files.`
  }
];