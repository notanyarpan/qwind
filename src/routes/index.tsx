import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        highlight="Our Brands"
        title="DiinoTech's Brands"
        subtitle="The official brands of DiinoTech."
        items={[
          {
            title: "Diino Host",
            description:
              "Diino Host is a DiinoTech brand focusing on hosting. DiinoHost provides free and paid 24/7 hosting. We host minecraft servers, discord bots and many more!",
            icon: IconBrandTailwind,
          },
          {
            title: "Diino Marketplace",
            description:
              "DiinoMarketplace is a DiinoTech brand focusing online shopping. ",
            icon: IconApps,
          },
          {
            title: "DiinoMC",
            description:
              "DiinoMC is a non DiinoTech brand which is a minecraft network. ",
          },
          {
            title: "DiinoWeb",
            description:
              "DiinoWeb is DiinoTech's newest upcoming brand focusing on data, web managment and more.",
            icon: IconRocket,
          },
        ]}
      />
      <Steps />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="All questions asked, answered."
        highlight="FAQs"
        items={[
          {
            title: "Do you scam?",
            description:
              "DiinoTechs strives to give the best to you. We do not strive to steal peoples money.",
          },
          {
            title: "Are you legit?",
            description:
              "DiinoTech and DiinoTechs Brands are legit. We have certified customer reviews on all our brands.",
          },
          {
            title: "Do we have free minecraft hosting?",
            description:
              "DiinoTech have a brand focusing on Hosting. We provide free and paid hosting for minecraft and more.",
          },
          {
            title: "What are your newest upcoming brands?",
            description:
              "Our newest upcoming brand is DiinoWeb. Its a company focusing on web development and more.",
          },
          {
            title: "How many customers have you served",
            description:
              "We have served a whopping 1000+ customers. We are strong and we will stay strong with all your support. ",
          },
          {
            title: "Whats DiinoMC",
            description:
              "DinoMC is a NON DiinoTech brand. Please note that this is NOT part of DiinoTech as we have 3 brands. DiinoMC is not part of it. DiinoMC is a minecraft network. Has nothing related to DiinoTech.",
          },
        ]}
      />
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
