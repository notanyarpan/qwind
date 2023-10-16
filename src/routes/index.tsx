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
              "DiinoMC is DiinoTech's first ever minecraft server brand focusing on giving you the best time of your life on our minecraft server, focusing on lifesteal and more",
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
              "No, we have never scam.",
          },
          {
            title: "Are you legit?",
            description:
              "Yes we are legit, by our customers reviews, we are totaly legit.",
          },
          {
            title: "Who is the main founder of DiinoTech?",
            description:
              "The main founder of DiinoTech is conquez (quez) in 2023",
          },
          {
            title: "How many companys are running so far?",
            description:
              "We are focusing on DiinoHost, DiinoMarketplace and DiinoWeb, not quite much about DiinoMC.",
          },
          {
            title: "Are staff applications open?",
            description:
              "Check out our discord server if you want to see that.",
          },
          {
            title: "What is your discord server?",
            description:
              "Click the discord server button on the navbar of your screen to communicate with us. We will soon launch a chat box for everybody.",
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
