export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  categories: string[];
  location: string;
  photographer: string;
  description?: string;
}

export interface FeaturedShoot {
  id: string;
  src: string;
  title: string;
  description: string;
  year: string;
  brand?: string;
  photographer: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
}

export interface Skill {
  id: string;
  name: string;
  rating: number; // Out of 5
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface ModelData {
  name: string;
  title: string;
  subtitle: string;
  heroImage: string;
  aboutImage: string;
  aboutText: string;
  stats: {
    age: string;
    height: string;
    location: string;
    languages: string[];
    hairColor: string;
    eyeColor: string;
  };
  availableFor: string[];
  gallery: GalleryItem[];
  featuredShoots: FeaturedShoot[];
  achievements: Achievement[];
  skills: Skill[];
  behindTheScenes: { id: string; src: string; caption: string }[];
  testimonials: Testimonial[];
  instagramFeed: { id: string; src: string; likes: string; comments: string; url?: string }[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    pinterest?: string;
  };
  contactEmail: string;
  contactPhone: string;
}

export const portfolioData: ModelData = {
  name: "Mihaan",
  title: "Young Model Portfolio",
  subtitle: "Professional Child Model",
  heroImage: "/images/DSC09643.JPG", // Stunning portrait for full-screen hero
  aboutImage: "/images/DSC09586.JPG", // Editorial portrait on left
  aboutText: "A young, aspiring model with confidence, charm, natural expressions, and a passion for fashion, lifestyle, and commercial photography. With a natural comfort in front of the camera, Mihaan brings innocence, energy, and professionalism to every photoshoot.",
  stats: {
    age: "6 Years",
    height: "118 cm / 3'10\"",
    location: "Mumbai, India",
    languages: ["English", "Hindi", "Marathi"],
    hairColor: "Dark Brown",
    eyeColor: "Deep Brown",
  },
  availableFor: [
    "Fashion Campaigns",
    "Lifestyle Shoots",
    "Commercial Campaigns",
    "Kids Brand Campaigns",
    "Editorial Photoshoots",
    "Print Advertisements",
    "Runway Shows",
  ],
  gallery: [
    {
      id: "gal-1",
      src: "/images/DSC09586.JPG",
      title: "Editorial Studio Portrait",
      categories: ["Portrait", "Studio", "Editorial"],
      location: "Studio, Mumbai",
      photographer: "Rohan Shrestha Studio",
      description: "Close-up portrait showcasing expressive eyes and high-fashion composure."
    },
    {
      id: "gal-2",
      src: "/images/DSC09621.JPG",
      title: "Casual Outdoor Play",
      categories: ["Casual", "Outdoor", "Lifestyle"],
      location: "Bandra Promenade, Mumbai",
      photographer: "Meera Sen",
      description: "Natural, candid shot capturing playful innocence and warm lighting."
    },
    {
      id: "gal-3",
      src: "/images/DSC09623.JPG",
      title: "Studio Fashion Catalog",
      categories: ["Fashion", "Studio", "Commercial"],
      location: "Modern Light Studios",
      photographer: "Vikram Kapoor",
      description: "Clean, commercial catalog style capturing stylish kids outerwear."
    },
    {
      id: "gal-4",
      src: "/images/DSC09643.JPG",
      title: "High Fashion Monochrome Portrait",
      categories: ["Portrait", "Studio", "Editorial"],
      location: "Studio, Mumbai",
      photographer: "Rohan Shrestha Studio",
      description: "Deep, soulful expression highlighting editorial adaptability."
    },
    {
      id: "gal-5",
      src: "/images/DSC09648.JPG",
      title: "Traditional Heritage Wear",
      categories: ["Traditional", "Outdoor", "Lifestyle"],
      location: "Heritage Fort, Pune",
      photographer: "Anirudh Pathak",
      description: "Graceful capture presenting fine traditional embroidery and styling."
    },
    {
      id: "gal-6",
      src: "/images/DSC09660.JPG",
      title: "Summer Sunshine Lifestyle",
      categories: ["Casual", "Outdoor", "Lifestyle"],
      location: "Juhu Beach Villa",
      photographer: "Meera Sen",
      description: "A bright, joyful shot filled with raw, energetic smiles."
    },
    {
      id: "gal-7",
      src: "/images/DSC09666.JPG",
      title: "Formal Tuxedo Studio Capture",
      categories: ["Formal", "Studio", "Commercial"],
      location: "Classic Backdrop Studio",
      photographer: "Vikram Kapoor",
      description: "Clean, sharp styling showcasing formal children's wear."
    },
    {
      id: "gal-8",
      src: "/images/DSC09673.JPG",
      title: "Vogue Kids Editorial Shoot",
      categories: ["Fashion", "Studio", "Editorial"],
      location: "Vogue India Studios",
      photographer: "Siddharth Malhotra",
      description: "Avant-garde editorial fashion presenting layered kids outfits."
    },
    {
      id: "gal-9",
      src: "/images/DSC09674.JPG",
      title: "Ethnic Festive Splendor",
      categories: ["Traditional", "Outdoor", "Lifestyle"],
      location: "Palace Gardens, Udaipur",
      photographer: "Anirudh Pathak",
      description: "Vibrant ethnic outfit highlighting celebration and color."
    },
    {
      id: "gal-10",
      src: "/images/DSC09683.JPG",
      title: "Modern Casual Studio",
      categories: ["Casual", "Studio", "Portrait"],
      location: "Modern Light Studios",
      photographer: "Vikram Kapoor",
      description: "A comfortable, approachable portrait style for digital lookbooks."
    }
  ],
  featuredShoots: [
    {
      id: "feat-1",
      src: "/images/DSC09673.JPG",
      title: "Zara Kids Autumn Campaign",
      description: "A moody, editorial campaign featuring the Autumn/Winter outerwear collection. This shoot received critical acclaim for its editorial framing and natural child posing.",
      year: "2025",
      brand: "Zara Kids",
      photographer: "Siddharth Malhotra"
    },
    {
      id: "feat-2",
      src: "/images/DSC09621.JPG",
      title: "H&M Summer Solstice",
      description: "A sunny, outdoor lifestyle photoshoot capturing the spirit of vacation and free play. The focus was on lightweight linen collections and expressive action shots.",
      year: "2026",
      brand: "H&M Kids",
      photographer: "Meera Sen"
    },
    {
      id: "feat-3",
      src: "/images/DSC09648.JPG",
      title: "Manyavar Heritage Kids",
      description: "A royal traditional shoot showcasing classic kurtas and sherwanis for the wedding festive season. Shot at a heritage fort location under soft golden-hour lighting.",
      year: "2025",
      brand: "Manyavar Kids",
      photographer: "Anirudh Pathak"
    }
  ],
  achievements: [
    {
      id: "ach-1",
      year: "2026",
      title: "Showstopper at India Kids Fashion Week",
      description: "Opened and walked as the showstopper for the leading premium kids designer label at IKFW, Mumbai.",
      category: "Runway"
    },
    {
      id: "ach-2",
      year: "2025",
      title: "Cover Feature in Kids Style Magazine",
      description: "Selected as the cover model and featured in an exclusive 6-page editorial layout on emerging kid fashion icons.",
      category: "Magazine Feature"
    },
    {
      id: "ach-3",
      year: "2025",
      title: "Global Campaign with Burberry Kids",
      description: "Successfully cast and photographed for the international digital and print advertising campaign for Burberry Kids.",
      category: "Brand Collaboration"
    },
    {
      id: "ach-4",
      year: "2024",
      title: "Best Expressive Child Model Award",
      description: "Won the top honor at the annual National Talent Search & Modeling Competition for kids.",
      category: "Awards"
    }
  ],
  skills: [
    {
      id: "sk-1",
      name: "Camera Confidence",
      rating: 5,
      description: "Completely natural, focused, and calm in front of large production rigs and cameras."
    },
    {
      id: "sk-2",
      name: "Dynamic Posing",
      rating: 5,
      description: "Understands shape and space, easily transitioning poses at the photographer's cue."
    },
    {
      id: "sk-3",
      name: "Expression Control",
      rating: 5,
      description: "Able to evoke genuine smiles, high-fashion serious expressions, and curious looks."
    },
    {
      id: "sk-4",
      name: "Runway Walk",
      rating: 4,
      description: "Confident gait, great posture, and natural timing for ramp presentations."
    },
    {
      id: "sk-5",
      name: "Patience & Discipline",
      rating: 5,
      description: "Extremely well-behaved, patient during wardrobe changes, and follows director commands."
    },
    {
      id: "sk-6",
      name: "Quick Learning",
      rating: 5,
      description: "Catches acting, dialogue prompts, and choreographies in a single walk-through."
    }
  ],
  behindTheScenes: [
    {
      id: "bts-1",
      src: "/images/DSC09660.JPG",
      caption: "Spontaneous laughs with the styling crew between takes."
    },
    {
      id: "bts-2",
      src: "/images/DSC09683.JPG",
      caption: "Getting final hair touches before going on set."
    },
    {
      id: "bts-3",
      src: "/images/DSC09623.JPG",
      caption: "Discussing the next frame layout with the creative director."
    },
    {
      id: "bts-4",
      src: "/images/DSC09666.JPG",
      caption: "Rehearsing runway turns in formal attire."
    }
  ],
  testimonials: [
    {
      id: "test-1",
      quote: "Working with Mihaan was an absolute breeze. Unlike many child models, he maintains focus and has an incredible range of natural expressions. A true professional in the making.",
      author: "Vikram Kapoor",
      role: "Lead Fashion Photographer",
      company: "Modern Light Studios"
    },
    {
      id: "test-2",
      quote: "Mihaan brought a wonderful energy to our Zara Kids runway showcase. He walked with so much poise and took directions perfectly. Brands are going to love his camera charm.",
      author: "Ananya Mehta",
      role: "Creative Director",
      company: "India Kids Fashion Week"
    },
    {
      id: "test-3",
      quote: "As a casting director, I look for children who have natural charm and aren't overly rehearsed. Mihaan has this raw talent and absolute camera-friendliness that makes him stand out.",
      author: "Kabir Roy",
      role: "Senior Casting Director",
      company: "Star Media Agency"
    },
    {
      id: "test-4",
      quote: "We are continually impressed by how patient and enthusiastic Mihaan remains even during long shoots. The crew absolutely loves working with him because of his friendly, playful nature.",
      author: "Pooja & Amit",
      role: "Parents of Mihaan"
    }
  ],
  instagramFeed: [
    { id: "ig-1", src: "/images/DSC09586.JPG", likes: "1.2k", comments: "48" },
    { id: "ig-2", src: "/images/DSC09621.JPG", likes: "982", comments: "32" },
    { id: "ig-3", src: "/images/DSC09623.JPG", likes: "1.5k", comments: "64" },
    { id: "ig-4", src: "/images/DSC09643.JPG", likes: "2.1k", comments: "89" },
    { id: "ig-5", src: "/images/DSC09648.JPG", likes: "1.1k", comments: "41" },
    { id: "ig-6", src: "/images/DSC09660.JPG", likes: "1.3k", comments: "52" }
  ],
  socialLinks: {
    instagram: "https://instagram.com/mihaan_model",
    facebook: "https://facebook.com/mihaan.model",
    youtube: "https://youtube.com/@mihaan_model",
    pinterest: "https://pinterest.com/mihaan_model"
  },
  contactEmail: "bookings@mihaanmodel.com",
  contactPhone: "+91 98765 43210"
};
