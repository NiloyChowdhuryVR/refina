export type Model = {
  id: number;
  name: string;
  modelPrompt: string;
  info: string;
  sampleImage: string;
};

export const models: Model[] = [
  {
    id: 1,
    name: "FrontFocus v1.0",
    modelPrompt: `Generate a high-resolution, studio-quality front-facing image of the product from the input image. 
      The product should be perfectly centered, fully visible, with sharp focus and crystal-clear details. 
      Use professional lighting that evenly illuminates the product with soft shadows. 
      Background should be pure white, clean, and free of distractions. 
      Ensure edges are crisp, perspective is correct, and the product appears natural and proportional.`,
    info: "Perfect front view image for catalog display.",
    sampleImage: "/samples/front-focus.png"
  },
  {
    id: 2,
    name: "NatureScene v0.9",
    modelPrompt: `Create a photorealistic image of the product placed in a natural, lifestyle environment. 
      The product should be fully visible and proportionally accurate. 
      Scene should include realistic backgrounds such as outdoor settings, cozy living rooms, or natural daylight environments. 
      Apply natural lighting, soft shadows, and reflections that make the product appear part of the scene. 
      Maintain high clarity and sharpness of the product, emphasizing its features and texture. 
      Ensure colors are balanced, realistic, and visually appealing.`,
    info: "Lifestyle shot of product in natural surroundings.",
    sampleImage: "/samples/nature-scene.png"
  },
  {
    id: 3,
    name: "WearIt v1.2",
    modelPrompt: `Generate a high-resolution image of a person wearing the product. 
      The pose should be natural and flattering, showing how the product fits and looks in real life. 
      Ensure the product is clearly visible, accurately colored, and proportionally correct. 
      Use realistic lighting and shadows that enhance the product's appearance. 
      Background can be neutral or slightly blurred to keep focus on the product. 
      The final image should look professional, like a catalog or marketing photo, highlighting usability and style.`,
    info: "Shows the product on a human model for lookbooks.",
    sampleImage: "/samples/wear-it.png"
  },
  {
    id: 4,
    name: "AngleView v1.0",
    modelPrompt: `Generate a high-resolution image of the product captured from a slightly angled perspective (not front-facing), highlighting dimensions, edges, and features. 
      Use professional studio lighting with soft shadows. 
      Ensure the product is proportionally accurate, fully visible, and looks realistic. 
      Background should be plain white or neutral to emphasize the product.`,
    info: "Single angled view showing product dimensions and features.",
    sampleImage: "/samples/angle-view.png"
  },
  {
    id: 5,
    name: "DetailView v1.1",
    modelPrompt: `Generate a high-resolution close-up image focusing on the product's intricate details, texture, and material quality. 
      Lighting should accentuate textures and fine features without overexposure. 
      Background should be minimal and neutral to emphasize the product. 
      Ensure sharp focus on the product, accurate colors, and natural appearance. 
      Suitable for showing fine craftsmanship, stitching, fabric, or surface details in e-commerce listings.`,
    info: "Focuses on product details and material quality.",
    sampleImage: "/samples/detail-view.png"
  },
  {
    id: 6,
    name: "LifestyleLens v0.7",
    modelPrompt: `Place the product in a real-life scenario with natural lighting and realistic context. 
      The product should be prominent yet seamlessly integrated into the scene. 
      Background can include environments like homes, offices, outdoor areas, or casual lifestyle settings. 
      Ensure shadows, reflections, and depth are realistic. 
      Colors and textures must be accurate, maintaining clarity and visual appeal. 
      The final image should evoke a lifestyle feel, perfect for marketing or social media use.`,
    info: "Gives a lifestyle context for marketing visuals.",
    sampleImage: "/samples/lifestyle-lens.png"
  },
  {
    id: 7,
    name: "ClearCut v1.0",
    modelPrompt: `Produce a perfectly cutout image of the product with a fully transparent background. 
      Ensure all edges are clean, smooth, and precise, with no background remnants. 
      The product should be fully visible, with accurate colors, textures, and realistic lighting. 
      Maintain sharp focus and professional presentation. 
      Suitable for banners, e-commerce product listings, and websites requiring versatile placement.`,
    info: "Transparent background for website banners and e-commerce listings.",
    sampleImage: "/samples/clear-cut.png"
  },
  {
    id: 8,
    name: "EditorialGlow v0.9",
    modelPrompt: `Create a premium, editorial-quality image of the product with dramatic lighting, artistic angles, and high-fashion styling. 
      Emphasize elegance, clarity, and realism, ensuring the product remains the focal point. 
      Background can be minimalist or creatively styled to enhance the product. 
      Maintain accurate colors, textures, and shadows. 
      Suitable for magazine-style marketing, social media campaigns, or high-end e-commerce presentations.`,
    info: "High-fashion or magazine-style product shot.",
    sampleImage: "/samples/editorial-glow.png"
  }
];
