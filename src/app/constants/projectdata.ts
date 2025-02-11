import { StaticImageData } from "next/image";
import { images } from "../assets/images";

export type Project = {
  id: number;
  title: string;
  type: string;
  subtype: string;
  year: number;
  location: string;
  slug: string;
  about_header: string;
  about_paragraph: string;
  project_details: string[];
  src: StaticImageData;
  images: StaticImageData[];
  description?: string;
  alt: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Ocean Paradise",
    type: "Country Club",
    subtype: "Commercial",
    year: 2024,
    location: "Bali, Indonesia",
    slug: "ocean-paradise",
    about_header:
      "Ocean Paradise offers a luxurious country club experience that perfectly blends modern elegance with the island's rich natural beauty and cultural charm.",
    about_paragraph:
      "Ocean Paradise, located on the pristine shores of Bali, Indonesia, offers a world-class country club experience where luxury meets nature. Surrounded by breathtaking ocean views and lush landscapes, this exclusive retreat combines modern elegance with traditional Balinese charm. Ocean Paradise is the perfect destination for relaxation, recreation, and unforgettable memories.",
    project_details: [
      "The design of Ocean Paradise seamlessly blends contemporary architecture with Balinese aesthetics, creating an ambiance that celebrates the island's rich culture and natural beauty. Every detail, from the intricately carved woodwork to the open-air lounges, was carefully crafted to harmonize with the environment.",
      "The country club offers state-of-the-art amenities, including a championship golf course, infinity pools overlooking the ocean, and luxurious spa treatments. Members can indulge in gourmet dining experiences featuring locally sourced ingredients and international cuisine.",
      "Sustainability is at the heart of Ocean Paradise, with eco-friendly practices such as solar energy, rainwater harvesting, and organic landscaping. This commitment ensures that the country club not only provides a lavish experience but also preserves Bali's natural heritage for future generations.",
    ],
    description:
      "Discover Ocean Paradise, a luxurious country club in Bali, Indonesia, blending Balinese charm with modern elegance. Enjoy ocean views, world-class amenities, and sustainable luxury.",
    src: images.oceancover,
    images: images.oceanparadise,
    alt: "Country club pool in Bali, Indonesia",
  },
  {
    id: 2,
    title: "Alajuela",
    type: "Private Villa",
    subtype: "Residential",
    year: 2025,
    location: "Escazú, Costa Rica",
    slug: "alajuela",
    about_header:
      "Private residence in Costa Rica offering an unparalleled blend of tranquility, sophistication, and breathtaking surroundings.",
    about_paragraph:
      "Nestled in the serene hills of Alajuela, Costa Rica, this private residence is an oasis of sophistication and comfort. With its stunning views of lush greenery and modern design, this exclusive home offers an unparalleled living experience that perfectly balances luxury and nature.",
    project_details: [
      "The residence features a contemporary architectural style that embraces natural light and open spaces. Expansive glass walls provide panoramic views of the surrounding forests, while handcrafted wooden elements add warmth and authenticity to the design.",
      "The home is equipped with luxurious amenities, including an infinity pool, a private gym, and a spacious outdoor living area perfect for entertaining. Every aspect of the residence was designed with relaxation and functionality in mind.",
      "Sustainability was a key consideration in the construction, with energy-efficient systems, rainwater collection, and the use of locally sourced materials. The residence showcases how luxury can coexist with environmental consciousness.",
    ],
    src: images.alajuelacover,
    images: images.alajuela,
    description:
      "Explore Alajuela, a private residence in Costa Rica offering stunning views, modern design, and sustainable luxury. A serene retreat in the heart of nature.",
    alt: "Modern luxury home in Costa Rica",
  },
  {
    id: 3,
    title: "Sysyphus",
    type: "Luxury Resort",
    year: 2023,
    subtype: "Commercial",
    location: "Paros, Greece",
    slug: "sysyphus",
    about_header:
      "Luxury Resort combining Cycladic elegance with world-class amenities, offering a timeless escape in the heart of the Aegean Sea.",
    about_paragraph:
      "Enjoy a serene infinity pool with sweeping Aegean views, a spa offering traditional Greek therapies, and a gourmet restaurant showcasing Mediterranean flavors. Each suite features private balconies, luxurious furnishings, and modern amenities for an unforgettable stay.",
    project_details: [
      "The resort's design draws inspiration from the iconic whitewashed buildings of the Cyclades, featuring clean lines, natural stone, and open-air courtyards. Each suite offers stunning sea views, private balconies, and luxurious interiors.",
      "Sysyphus boasts world-class amenities, including a serene infinity pool overlooking the Aegean, a gourmet restaurant serving Mediterranean delicacies, and a wellness spa offering traditional Greek treatments.",
      "Dedicated to sustainability, the resort incorporates solar energy, water conservation systems, and eco-friendly materials into its operations. Sysyphus ensures that guests enjoy luxury while preserving the pristine beauty of Paros.",
    ],
    src: images.sysyphuscover,
    images: images.sysyphus,
    description:
      "Experience Sysyphus Luxury Resort in Paros, Greece. Enjoy Cycladic elegance, breathtaking Aegean views, and sustainable luxury. A perfect island retreat.",
    alt: "s",
  },
  {
    id: 4,
    title: "Cape Solis",
    type: "Private Villa",
    year: 2023,
    subtype: "Commercial",
    location: "Cape Town, South Africa",
    slug: "cape-solis",
    about_header:
      "Designed for effortless luxury and uninterrupted ocean views, offering a private retreat where modern elegance meets the untamed beauty of the coast.",
    about_paragraph:
      "Cape Solis is a masterpiece of modern architecture set against the striking backdrop of the Atlantic Ocean. Clean lines, natural textures, and expansive views define this private villa, where every space is carefully curated to offer a sense of peace and exclusivity. It’s a retreat where design and nature exist in perfect balance.",
    project_details: [
      "Cape Solis is a secluded oceanfront villa in Cape Town, designed for those seeking privacy and tranquility. Perched on a coastal cliff, its architecture embraces panoramic sea views, with floor-to-ceiling windows that flood the interiors with natural light. The open-plan design seamlessly connects the indoor and outdoor spaces, allowing guests to fully immerse themselves in the breathtaking surroundings.",
      "The villa features a spacious infinity pool overlooking the Atlantic, private terraces for unwinding at sunset, and elegantly designed interiors that balance modern simplicity with warm, natural textures. Each room is thoughtfully arranged to maximize comfort, with a focus on creating a peaceful, retreat-like atmosphere away from the city’s bustle.",
      "With its dramatic setting and thoughtful design, Cape Solis is more than a getaway—it’s a sanctuary where the ocean’s rhythm sets the pace. Whether enjoying a morning coffee on the terrace or an evening by the fire, every moment here is defined by serenity and breathtaking beauty.",
    ],
    src: images.soliscover,
    images: images.solis,
    description:
      "Stay at Aqua Suites, a luxury hotel in Bangkok, Thailand, blending coastal serenity with urban sophistication. Enjoy modern design, fine dining, and eco-friendly amenities.",
    alt: "Private luxury villa near Cape Town's beaches",
  },
  {
    id: 5,
    title: "Aqua Suites",
    type: "Luxury Hotel",
    year: 2023,
    subtype: "Commercial",
    location: "Bangkok, Thailand",
    slug: "aqua-suites",
    about_header:
      "Aqua Suites offers a unique coastal-inspired luxury experience, blending serene design with the energy of Thailand’s bustling capital.",
    about_paragraph:
      "Situated in the vibrant heart of Bangkok, Thailand, Aqua Suites redefines luxury with its coastal-inspired design and world-class amenities. This premier destination combines the tranquility of a seaside escape with the excitement of a bustling metropolis, offering guests a unique and unforgettable stay.",
    project_details: [
      "Aqua Suites features a sleek modern design with ocean-inspired interiors, creating a serene atmosphere in the middle of Bangkok. The suites are elegantly furnished with contemporary decor and offer breathtaking cityscape views.",
      "Guests can enjoy a rooftop infinity pool, a state-of-the-art fitness center, and fine dining experiences featuring both Thai and international cuisine. Aqua Suites is designed to cater to both leisure and business travelers.",
      "Sustainability is integral to Aqua Suites, with eco-friendly practices such as energy-efficient lighting, water recycling systems, and green rooftop gardens. The hotel exemplifies how luxury accommodations can prioritize environmental responsibility.",
    ],
    src: images.aquacover,
    images: images.aqua,
    description:
      "Stay at Aqua Suites, a luxury hotel in Bangkok, Thailand, blending coastal serenity with urban sophistication. Enjoy modern design, fine dining, and eco-friendly amenities.",
    alt: "Luxury hotel with palm trees and a pool facing you",
  },
  {
    id: 6,
    title: "The Hyundai Seoul",
    type: "Department Store",
    year: 2023,
    subtype: "Commercial",
    location: "Seoul, South Korea",
    slug: "the-hyundai-seoul",
    about_header:
      "Redefining the modern shopping experience, blending cutting-edge design with nature-inspired spaces to create a luxury destination unlike any other in South Korea.",
    about_paragraph:
      "Located in the heart of Seoul, The Hyundai Seoul is more than just a department store—it’s a reimagined retail and cultural hub. With its vast open spaces, indoor gardens, and futuristic design, it offers an immersive shopping experience where luxury, innovation, and nature come together seamlessly.",
    project_details: [
      "The Hyundai Seoul offers a shopping experience that feels as much like an art gallery as a retail destination. Its Sounds Forest, a lush indoor garden bathed in natural light, creates a tranquil escape from the city’s energy. The minimalist design, glass ceilings, and open layout enhance the sense of space and sophistication.",
      "Beyond its striking aesthetics, The Hyundai Seoul curates a world-class selection of luxury brands and contemporary fashion. Flagship stores from global icons stand alongside emerging Korean designers, blending tradition with innovation. Digital elements, including smart displays and interactive installations, add a cutting-edge touch.",
      "More than a retail space, The Hyundai Seoul is a destination where shopping, culture, and leisure merge. Visitors can explore art exhibitions, enjoy fine dining with city views, or relax in thoughtfully designed spaces. By prioritizing both atmosphere and innovation, it sets a new benchmark for modern department stores.",
    ],
    src: images.hyundaicover,
    images: images.hyundai,
    description:
      "Stay at Aqua Suites, a luxury hotel in Bangkok, Thailand, blending coastal serenity with urban sophistication. Enjoy modern design, fine dining, and eco-friendly amenities.",
    alt: "Seoul's most popular department store with a modern design",
  },
];

// export const projectsGallery = [
//   {
//     title: "Ocean Paradise",
//     type: "Country Club",
//     slug: "ocean-paradise",
//     src: images.oceancover,
//   },
//   {
//     title: "Alajuela",
//     type: "Private Villa",
//     slug: "alajuela",
//     src: images.alajuelacover,
//   },
//   {
//     title: "Sysyphus",
//     type: "Luxury Resort",
//     slug: "sysyphus",
//     src: images.sysyphus,
//   },
//   {
//     title: "Cape Solis",
//     type: "Private Villa",
//     slug: "cape-solis",
//     src: images.soliscover,
//   },
//   {
//     title: "Aqua Suites",
//     type: "Luxury Hotel",
//     slug: "aqua-suites",
//     src: images.aquacover,
//   },
//   {
//     title: "The Hyundai Seoul",
//     type: "Department Store",
//     slug: "the-hyundai-seoul",
//     src: images.hyundaicover,
//   },
// ];
