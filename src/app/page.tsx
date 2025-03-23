import EarthSection from "@/components/sections/earthSection/EarthSection";
import styles from "./page.module.css";
import HomeSection from "@/components/sections/homeSection/HomeSection";
import VenusSection from "@/components/sections/venusSection/VenusSection";
import MarsSection from "@/components/sections/marsSection/MarsSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeSection />
      <EarthSection />
      <VenusSection />
      <MarsSection />
    </div>
  );
}
