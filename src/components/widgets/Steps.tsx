import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import IconStar from "~/components/icons/IconStar"
const sideImg = "https://clipground.com/images/why-png-10.png";

export default component$(() => {
  const stepsData = {
    title: 'Why choose DiinoTech?',
    items: [
      {
        title: 'Our first why',
        description:
          'DiinoHost is a trusted multibussinesss that never scams.',
        icon: IconStar,
      },
      {
        title: 'Our second why',
        description:
          'All our bussnisses such as DiinoHost, Diino Marketplace and more have certified reviews from both our free and paid customers.',
        icon: IconStar,
      },
      {
        title: 'Our third why',
        description:
          'Why not choose us? ㄟ( ▔, ▔ )ㄏ',
        icon: IconStar,
      },
      {
        title: 'Choose us!',
        icon: IconStar,
      },
    ],
    image: {
      src: sideImg,
      alt: 'Steps image',
    },
  };
  const { title, items, image } = stepsData;

  return (
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="row-gap-10 grid gap-6 md:grid-cols-2">
        <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
          {title && <h2 class="font-heading mb-8 text-3xl font-bold lg:text-4xl">{title}</h2>}
          {items &&
            items.length &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-steps-${index}`} class="flex">
                <div class="mr-4 flex flex-col items-center">
                  <div>
                    {index !== items.length - 1 ? (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                        {Icon ? (
                          <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        )}
                      </div>
                    ) : (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                        {Icon ? (
                          <Icon class="h-6 w-6 text-white dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-white dark:text-slate-200" />
                        )}
                      </div>
                    )}
                  </div>
                  {index !== items.length - 1 && <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                </div>
                <div class={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
                  {title && <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                  {description && <p class="text-gray-600 dark:text-slate-400">{description}</p>}
                </div>
              </div>
            ))}
        </div>
        <div class="relative">
          {image && (
            <Image
              src={image.src}
              width={600}
              height={768}
              alt={image.alt}
              class="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
});
