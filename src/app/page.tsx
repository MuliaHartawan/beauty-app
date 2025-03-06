import Hero from "@/components/home/hero";
import Profile from "@/components/home/profile";
import Feature from "@/components/home/feature";
import Treatment from "@/components/home/treatment";
import Satisfaction from "@/components/home/satisfaction";
import Legal from "@/components/home/legal";
import Package from "@/components/home/package";
import Testimonial from "@/components/home/testimonial";
import Statistic from "@/components/home/statistic";
import Faq from "@/components/home/faq";
import Cta from "@/components/home/cta";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Profile Section */}
      <Profile />

      {/* Features Section */}
      <Feature />

      {/* Treatment Process */}
      <Treatment />

      {/* Satisfaction Section */}
      <Satisfaction />

      {/* Legal Section */}
      <Legal />

      <div className="bg-white">
        {/* Package Section */}
        <Package />

        {/* Testimonials */}
        <Testimonial />

        {/* Statistics */}
        <Statistic />
      </div>

      {/* FAQ Section */}
      <Faq />

      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  );
}
