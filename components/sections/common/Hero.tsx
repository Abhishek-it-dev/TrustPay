import { heroConfig } from "../../../config/sections/heroConfig";

const Hero = () => {
  const { title, subtitle, buttons } = heroConfig;
  return (
   <section className="relative  bg-[linear-gradient(135deg,var(--primary),var(--accent)_90%)] text-white py-[100px] pb-[80px] overflow-hidden ">
      <div id="particles-js" className="absolute inset-0 z-0 " />

      <div className="relative z-10 text-center px-4">
       
        <h1 className="font-[700] text-[2.7rem] tracking-[-1px] mb-[16px] fade-in-up text-white">
          {title}
        </h1>

       
        <p className="text-[1.35rem] mb-[32px] fade-in-up-delay ">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="hero-buttons fade-in-up-late flex flex-wrap justify-center items-center gap-[14px]">
          {buttons.map(({ id, label, href, className }) => (
            <a key={id} href={href} className={className}>
              {label}
            </a>
          ))}
          
        </div>
      </div>
    </section>
  );
}
export default Hero;