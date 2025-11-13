import CustomerStories from "../../../components/sections/home/CustomerStories";
import BenefitsSection from "../../../components/sections/payments/BenifitsSection";
import ComparisonTable from "../../../components/sections/payments/ComparisonTable";
import CTA from "../../../components/sections/payments/CTA";
import FAQs from "../../../components/sections/payments/FAQs";
import ImpactStory from "../../../components/sections/payments/ImpactStory";
import MSMETriedTools from "../../../components/sections/payments/MSMETriedTools";
import PaymentHero from "../../../components/sections/payments/PaymentHero";
import PaymentProblem from "../../../components/sections/payments/PaymentProblem";
import PaymentSteps from "../../../components/sections/payments/PaymentSteps";




export default function PaymentsPage() {
  return (
    <main>
      <PaymentHero/>
      <PaymentProblem/>
      <MSMETriedTools/>
      <PaymentSteps/>
      <BenefitsSection/>
      <ComparisonTable/>
      <ImpactStory/>
      <CustomerStories/>
      <FAQs/>
      <CTA/>
    </main>
  );
}