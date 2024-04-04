import CSSSnapSection from "@/components/CSSSnapSection";
import Image from "next/image";
import React from "react";
import QuartzSphere from "./../images/3dRenders/quartzSphere.webp";
import PlantAgave from "./../images/3dRenders/plantagave.webp";
import SlateSphere from "./../images/3dRenders/slateSphere.webp";
import StuccoSphere from "./../images/3dRenders/stuccoSphere.webp";
import WhiteOakSphere from "./../images/3dRenders/whiteOakSphere.webp";

const TextBlock = ({ heading, description }: { heading: string; description: string }) => {
  return (
    <div className='px-3 my-8'>
      <h1 className='md:text-5xl text-4xl font-bold'>{heading}</h1>
      <p className='max-w-5xl mt-8 md:text-2xl text-xl px-2'>{description}</p>
    </div>
  );
};

const CssSnap = () => {
  return (
    <div className='bg-white scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll'>
      <CSSSnapSection backgroundColour='white'>
        <Image src={QuartzSphere} height={500} width={500} alt='quartz sphere' />
        <TextBlock
          heading='White Quartz'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi assumenda, consectetur quas fuga sapiente in veniam quaerat magni molestiae facilis reiciendis architecto ad, sint aut fugit odio, maiores quam.'
        />
      </CSSSnapSection>

      <CSSSnapSection backgroundColour='darkSlate'>
        <Image src={SlateSphere} height={500} width={500} alt='quartz sphere' />
        <TextBlock
          heading='Slate Sphere'
          description='Aliquip officia fugiat ut deserunt nostrud ad sunt eu consectetur commodo elit. Esse pariatur elit irure tempor consectetur pariatur veniam commodo ipsum nisi. Ex magna id anim non Lorem mollit ex esse in adipisicing. Tempor aute eiusmod magna ut est ullamco quis laboris pariatur et. Velit aliqua id consequat veniam.'
        />
      </CSSSnapSection>
      <CSSSnapSection backgroundColour='rose'>
        <Image src={StuccoSphere} height={500} width={500} alt='quartz sphere' />
        <TextBlock
          heading='Stucco Sphere'
          description='Tempor ex officia non labore aliquip ad sit Lorem dolor. Minim commodo aute id qui. Proident amet commodo amet sint quis ea ex ad. Sint quis do incididunt in minim ullamco nostrud.'
        />
      </CSSSnapSection>
      <CSSSnapSection backgroundColour='orange'>
        <Image src={WhiteOakSphere} height={500} width={500} alt='quartz sphere' />
        <TextBlock
          heading='White Oak Sphere'
          description='Ipsum commodo proident duis do nulla adipisicing esse do enim cillum id. Proident aliqua pariatur laboris ad quis id. Reprehenderit sunt ea voluptate quis deserunt laboris ex fugiat voluptate.'
        />
      </CSSSnapSection>
      <CSSSnapSection backgroundColour='green'>
        <Image src={PlantAgave} height={500} width={500} alt='quartz sphere' />
        <TextBlock
          heading='Agave Plant'
          description='Proident voluptate cillum tempor occaecat id sunt proident excepteur ipsum enim anim. Velit fugiat occaecat quis culpa quis amet cillum. Labore pariatur deserunt magna ea fugiat est laboris quis do irure.'
        />
      </CSSSnapSection>
    </div>
  );
};

export default CssSnap;
