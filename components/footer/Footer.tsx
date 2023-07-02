import Logo from "$store/components/footer/Logo.tsx";
import FooterItems from "$store/components/footer/FooterItems.tsx";
import Social from "$store/components/footer/Social.tsx";
import ColorClasses from "$store/components/footer/ColorClasses.tsx";
import BackToTop from "$store/components/footer/BackToTop.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter"
    | "Youtube";
  link: string;
}

export interface Layout {
  backgroundColor?: "Primary";
  variation?: "Variation 1";
  hide?: {
    logo?: boolean;
    newsletter?: boolean;
    sectionLinks?: boolean;
    socialLinks?: boolean;
    paymentMethods?: boolean;
    mobileApps?: boolean;
    regionOptions?: boolean;
    extraLinks?: boolean;
    backToTheTop?: boolean;
  };
}

export interface Props {
  logo?: {
    image: LiveImage;
    description?: string;
  };
  sections?: Section[];
  social?: {
    title?: string;
    items: SocialItem[];
  };

  backToTheTop?: {
    text?: string;
  };
  layout?: Layout;
}

function Footer({
  logo,
  sections = [],
  social = { title: "", items: [] },
  backToTheTop,
  layout = {
    backgroundColor: "Primary",
    variation: "Variation 1",
    hide: {
      logo: false,
      sectionLinks: false,
      socialLinks: false,
      extraLinks: false,
      backToTheTop: false,
    },
  },
}: Props) {
  const _logo = layout?.hide?.logo ? <></> : <Logo logo={logo} />;

  const _sectionLinks = layout?.hide?.sectionLinks ? <></> : (
    <FooterItems
      sections={sections}
    />
  );
  const _social = layout?.hide?.socialLinks
    ? <></>
    : <Social content={social} />;

  return (
    <>
      <footer
        class={`w-full flex flex-col pt-10 pb-2 lg:pb-10 gap-10 bg-[#000000] ${
          ColorClasses(layout)
        }`}
      >
        <div class="lg:container mx-6 lg:mx-auto">
          <div class="flex flex-col">
            <div class="flex flex-col lg:flex-row lg:justify-center max-w-full">
              {_logo}
              {_sectionLinks}
              {_social}
            </div>
          </div>
        </div>
        {layout?.hide?.backToTheTop
          ? <></>
          : <BackToTop content={backToTheTop?.text} />}
      </footer>
    </>
  );
}

export default Footer;
