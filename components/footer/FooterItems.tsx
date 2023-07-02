import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export default function FooterItems(
  { sections }: { sections: Section[] },
) {
  const justify = false;
  return (
    <>
      {sections.length > 0 && (
        <>
          {/* Desktop view */}
          <ul
            class={`hidden lg:flex flex-row gap-10 max-w-3xl ml-20 ${
              justify && "justify-between"
            }`}
          >
            {sections.map((section) => (
              <li class="break-all flex-1">
                <div class="flex flex-col gap-1">
                  <span class="font-medium text-lg">
                    {section.label}
                  </span>
                  <ul class={`flex flex-col gap-0.5 flex-wrap text-sm `}>
                    {section.items?.map((item) => (
                      <li>
                        <a href={item.href} class="block py-1 link link-hover">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile view */}
          <div class="container lg:hidden  mt-9 mb-6 ml-0">
            <ul class="mb-3">
              {sections.map((section) => (
                <li class="mb-6">
                  <span class="font-extrabold text-xl">
                    {section.label}
                  </span>
                  <ul class={`gap-0.5 text-sm font-extralight`}>
                    {section.items?.map((item) => (
                      <li>
                        <a href={item.href} class="block py-1 link link-hover">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
