import * as React from "react";
import { ContainerScroll } from "@/src/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-40">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-accent">
                Market Velocity
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1611974717482-982c7a629b3c?q=80&w=2070&auto=format&fit=crop"
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
