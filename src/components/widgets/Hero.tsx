import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage = "https://png.pngtree.com/png-vector/20230221/ourmid/pngtree-letter-d-logo-design-png-image_6611845.png";

export default component$(() => {
  return (
    <section class={`bg-gradient-to-b md:bg-gradient-to-r from-white via-purple-50 to-sky-100 dark:bg-none mt-[-72px]`}>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:h-screen 2xl:h-auto pt-[72px]">
        <div class="py-12 md:py-20 2xl:min-h-0 lg:flex lg:gap-8 lg:items-center lg:py-16">
          <div class="mx-auto text-center basis-1/2 lg:text-left md:pb-16 pb-12 lg:pb-0">
            <div>
              <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                Technology starts here <br class="hidden lg:block" />{" "}
                <span class="hidden lg:inline">at </span> <span class="text-[#039de1]">DiinoTech</span> 
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-600 mb-8 dark:text-slate-400">
Technology
<b> Starts here</b>, Welcome to {" "}
                  <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                    DiinoTech.
                  </span>{" "}
                  DiinoTech is a multibussniess company consisting of 3 sectors. Which all focus on Web Development, Server hosting and online shopping. {" "}
                  <span class="inline md:hidden">...</span>
                  <span class="hidden md:inline">
                    
                  </span>
                </p>
                <div class="flex flex-col flex-nowrap gap-4 m-auto max-w-xs sm:flex-row sm:justify-center sm:max-w-md lg:justify-start lg:m-0 lg:max-w-7xl">
                  <div class="flex w-full sm:w-auto">
                    <a
                      class="btn btn-primary sm:mb-0 w-full"
                      href="https://discord.gg/afRZgrBVXa"
                      target="_blank"
                      rel="noopener"
                    >
                      Our Discord Server
                    </a>
                  </div>
                  <div class="flex w-full sm:w-auto">
    <a href="https://discord.gg/afRZgrBVXa" class="btn w-full bg-gray-50 dark:bg-transparent">Learn more</a>
</div>

                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <div class="relative m-auto max-w-5xl">
              <Image
                src={coverImage}
                layout="constrained"
                width={493}
                height={616}
                alt="DiinoLogo"
                class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
