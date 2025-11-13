
import CTA from "../../../components/sections/receivables/CTA";
import FAQs from "../../../components/sections/receivables/FAQs";
import HowTrustReceivablesWork from "../../../components/sections/receivables/HowAssuredReceivablesWork";
import KeyBenefits from "../../../components/sections/receivables/KeyBenefits";
import MSMEs from "../../../components/sections/receivables/MSMEs";
import RealLifeExample from "../../../components/sections/receivables/ReallifeExample";
import ReceivalablesHero from "../../../components/sections/receivables/ReceivablesHero";
import  TraditionalReceivables from "../../../components/sections/receivables/TraditionalReceivables";
import WorkingCapitalInterestSaving from "../../../components/sections/receivables/WorkingCapitalInterestSaving";


export default function ReceivablesPage() { 
    return(
        <main>
       <ReceivalablesHero />
      <MSMEs/>
      <TraditionalReceivables/>
      <HowTrustReceivablesWork/>
      <WorkingCapitalInterestSaving/>
      <KeyBenefits/>
      <RealLifeExample/>
      <FAQs/>
      <CTA/>
        </main>
    )
}