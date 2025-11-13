"use client"
import ManufacturersTraders from "../../../components/sections/businesses/ManufacturersTraders";
import WholesalersDistributors from "../../../components/sections/businesses/WholesalersDistributors";
import ServiceProviders from "../../../components/sections/businesses/ServiceProviders";
import ExportersImporters from "../../../components/sections/businesses/ExportersImporters";
import EcommerceBusinesses from "../../../components/sections/businesses/EcommerceBusiness";
import WhyTrustAssuredPay from "../../../components/sections/businesses/WhyTrustAssuredPay";
import FAQs from "../../../components/sections/businesses/FAQs";
import CTA from "../../../components/sections/businesses/CTA";
import BusinessesHero from "../../../components/sections/businesses/BusinessesHero";
export default function BusinessPage() {
  return (
    <main>
      <BusinessesHero />
      <ManufacturersTraders />
      <WholesalersDistributors />
      <ServiceProviders />
      <ExportersImporters />
      <EcommerceBusinesses />
      <WhyTrustAssuredPay />
      <FAQs />
      <CTA />
    </main>
  );
}
