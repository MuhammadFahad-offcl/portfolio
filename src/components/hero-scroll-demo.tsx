"use client";

import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[260px] pt-[240px] md:pb-[460px] md:pt-[400px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-semibold text-black dark:text-white md:text-5xl">
              Building intelligent products with <br />
              <span className="text-4xl md:text-[5.6rem] font-bold mt-1 leading-none">
                cinematic scroll systems
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80"
          alt="AI automation workspace"
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
          draggable={false}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </ContainerScroll>
    </div>
  );
}
