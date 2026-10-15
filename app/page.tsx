import ClosingCta from "@/components/features/home/ClosingCta";
import ExperienceSnapshot from "@/components/features/home/ExperienceSnapshot";
import FeaturedCredentials from "@/components/features/home/FeaturedCredentials";
import FocusAreas from "@/components/features/home/FocusAreas";
import GalleryStrip from "@/components/features/home/GalleryStrip";
import GridTeaser from "@/components/features/home/GridTeaser";
import HeroSection from "@/components/features/home/HeroSection";
import HighlightsStrip from "@/components/features/home/HighlightsStrip";
import LifecycleSection from "@/components/features/home/LifecycleSection";
import MentorshipBand from "@/components/features/home/MentorshipBand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsStrip />
      <ExperienceSnapshot />
      <FocusAreas />
      <LifecycleSection />
      <MentorshipBand />
      <FeaturedCredentials />
      <GalleryStrip />
      <GridTeaser />
      <div className="pt-16 md:pt-24" />
      <ClosingCta />
    </>
  );
}
