import { HeroGeometric } from "./ui/shape-landing-hero";

export function DemoHeroGeometric() {
    return <HeroGeometric 
            badge="AI Investing"
            title1="Make Better"
            title2="Investments"
            subtitle="Turn complex market data into clear investment decisions. Live broker sync."
            ctaText="Start 7-Day Free Trial"
            onCTA={() => console.log("Signup clicked")}
    />;
}
