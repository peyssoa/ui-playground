import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  backgroundColour?: "white" | "green" | "black" | "darkSlate" | "rose" | "orange";
};

export default function CSSSnapSection({ children, backgroundColour = "green" }: Props) {
  return (
    <section
      className={clsx("h-screen w-full text-center py-7 snap-start snap-always flex items-center justify-center", {
        "bg-white text-gray-800": backgroundColour === "white",
        "bg-green-50 text-gray-800": backgroundColour === "green",
        "bg-black text-gray-50": backgroundColour === "black",
        "bg-stone-900 text-gray-50": backgroundColour === "darkSlate",
        "bg-rose-50 text-gray-800": backgroundColour === "rose",
        "bg-orange-50 text-gray-800": backgroundColour === "orange",
      })}
    >
      <div className='container mx-auto flex items-center flex-col justify-center'>{children}</div>
    </section>
  );
}
