import { prisma } from "@/lib/prisma";
import HeroSection from "@/components/home/HeroSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import FeaturedTours from "@/components/home/FeaturedTours";
import ExploreSection from "@/components/home/ExploreSection";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default async function HomePage() {
  // Pull top 3 tours for the homepage
  const tours = await prisma.tour.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
    select: {
      id: true, slug: true, title: true, subtitle: true,
      durationDays: true, themes: true, priceFromUsd: true, gallery: true
    }
  });

  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <FeaturedTours tours={tours} />
      <ExploreSection />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
