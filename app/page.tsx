import ClosingCta from "@/components/features/home/ClosingCta";
import ExperienceSnapshot from "@/components/features/home/ExperienceSnapshot";
import FeaturedCredentials from "@/components/features/home/FeaturedCredentials";
import FocusAreas from "@/components/features/home/FocusAreas";
import HeroSection from "@/components/features/home/HeroSection";
import MentorshipBand from "@/components/features/home/MentorshipBand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSnapshot />
      <FocusAreas />
      <MentorshipBand />
      <FeaturedCredentials />
      <ClosingCta />
    </>
  );
}
