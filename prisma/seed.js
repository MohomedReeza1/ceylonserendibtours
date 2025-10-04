const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Clear existing (respecting relations)
  await prisma.itinerarySection.deleteMany();
  await prisma.tour.deleteMany();

  const tours = [
    {
      slug: "essential-sri-lanka-7-days",
      title: "Essential Sri Lanka — 7 Days",
      subtitle: "Sigiriya, Kandy, Ella, Yala & Galle",
      durationDays: 7,
      themes: ["Culture", "Hills", "Wildlife", "Beach"],
      priceFromUsd: 899,
      highlights: [
        "Climb Sigiriya Rock Fortress",
        "Temple of the Tooth in Kandy",
        "Scenic train to Ella",
        "Yala safari",
        "Galle Fort sunset",
      ],
      inclusions: [
        "Licensed chauffeur-guide",
        "Private AC vehicle",
        "Breakfasts",
        "All transfers",
      ],
      exclusions: [
        "International flights",
        "Lunch & dinner",
        "Entrance fees",
        "Travel insurance",
      ],
      gallery: [
        "/images/7d/sigiriya.jpg",
        "/images/7d/kandy.jpg",
        "/images/7d/ella.jpg",
        "/images/7d/yala.jpg",
        "/images/7d/galle.jpg",
      ],
      itinerary: Array.from({ length: 7 }).map((_, i) => ({
        day: i + 1,
        title: `Day ${i + 1}`,
        content: "Daily highlights as per the program.",
      })),
    },
    {
      slug: "tea-hills-10-days",
      title: "Tea & Hills — 10 Days",
      subtitle: "Highlands, waterfalls & slow travel",
      durationDays: 10,
      themes: ["Hills", "Nature", "Wellness"],
      priceFromUsd: 1299,
      highlights: [
        "Nuwara Eliya tea country",
        "Horton Plains",
        "Ella hikes",
        "Scenic trains",
      ],
      inclusions: [
        "Licensed chauffeur-guide",
        "Private AC vehicle",
        "Breakfasts",
        "All transfers",
      ],
      exclusions: [
        "International flights",
        "Lunch & dinner",
        "Entrance fees",
        "Travel insurance",
      ],
      gallery: ["/images/10d/tea.jpg", "/images/10d/horton.jpg", "/images/10d/ella.jpg"],
      itinerary: Array.from({ length: 10 }).map((_, i) => ({
        day: i + 1,
        title: `Day ${i + 1}`,
        content: "Highlands exploration and scenic travel.",
      })),
    },
    {
      slug: "wildlife-beaches-14-days",
      title: "Wildlife & Beaches — 14 Days",
      subtitle: "Safaris, whales & south coast bliss",
      durationDays: 14,
      themes: ["Wildlife", "Beach", "Family"],
      priceFromUsd: 1899,
      highlights: [
        "Wilpattu/Yala safaris",
        "Mirissa whale watching",
        "Bentota/Galle beaches",
      ],
      inclusions: [
        "Licensed chauffeur-guide",
        "Private AC vehicle",
        "Breakfasts",
        "All transfers",
      ],
      exclusions: [
        "International flights",
        "Lunch & dinner",
        "Entrance fees",
        "Travel insurance",
      ],
      gallery: ["/images/14d/wilpattu.jpg", "/images/14d/mirissa.jpg", "/images/14d/galle.jpg"],
      itinerary: Array.from({ length: 14 }).map((_, i) => ({
        day: i + 1,
        title: `Day ${i + 1}`,
        content: "Wildlife and south-coast relaxation.",
      })),
    },
  ];

  for (const t of tours) {
    await prisma.tour.create({
      data: {
        ...t,
        itinerary: { create: t.itinerary },
      },
    });
  }

  console.log("Seeded ✔");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
