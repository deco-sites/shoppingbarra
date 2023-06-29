import Logo from "$store/components/footer/Logo.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import FooterItems from "$store/components/footer/FooterItems.tsx";
import Social from "$store/components/footer/Social.tsx";
import PaymentMethods from "$store/components/footer/PaymentMethods.tsx";
import MobileApps from "$store/components/footer/MobileApps.tsx";
import ExtraLinks from "$store/components/footer/ExtraLinks.tsx";
import PoweredBy from "$store/components/footer/PoweredBy.tsx";
import RegionSelector from "$store/components/footer/RegionSelector.tsx";
import ColorClasses from "$store/components/footer/ColorClasses.tsx";
import Divider from "$store/components/footer/Divider.tsx";
import BackToTop from "$store/components/footer/BackToTop.tsx";
import SecondaryFooter from "$store/components/footer/SecondaryFooter.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useEffect, useState } from "preact/hooks";

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
    | "Twitter";
  link: string;
}

export interface PaymentItem {
  label: "Diners" | "Elo" | "Mastercard" | "Pix" | "Visa";
}

export interface MobileApps {
  /** @description Link to the app */
  apple?: string;
  /** @description Link to the app */
  android?: string;
}

export interface RegionOptions {
  currency?: Item[];
  language?: Item[];
}

export interface NewsletterForm {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Layout {
  backgroundColor?:
    | "Primary"
    | "Secondary"
    | "Accent"
    | "Base 100"
    | "Base 100 inverted";
  variation?:
    | "Variation 1"
    | "Variation 2"
    | "Variation 3"
    | "Variation 4"
    | "Variation 5";
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
  newsletter?: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: NewsletterForm;
  };
  sections?: Section[];
  social?: {
    title?: string;
    items: SocialItem[];
  };
  payments?: {
    title?: string;
    items: PaymentItem[];
  };
  mobileApps?: MobileApps;
  regionOptions?: RegionOptions;
  extraLinks?: Item[];
  backToTheTop?: {
    text?: string;
  };
  layout?: Layout;
  isHomePage?: boolean;
}

function Footer({
  logo,
  newsletter = {
    title: "",
    description: "",
    form: { placeholder: "", buttonText: "", helpText: "" },
  },
  sections = [],
  social = { title: "", items: [] },
  payments = { title: "", items: [] },
  mobileApps = { apple: "", android: "" },
  regionOptions = { currency: [], language: [] },
  extraLinks = [],
  backToTheTop,
  layout = {
    backgroundColor: "Primary",
    variation: "Variation 1",
    hide: {
      logo: false,
      newsletter: false,
      sectionLinks: false,
      socialLinks: false,
      paymentMethods: false,
      mobileApps: false,
      regionOptions: false,
      extraLinks: false,
      backToTheTop: false,
    },
  },
  isHomePage = true,
}: Props) {
  const _logo = layout?.hide?.logo ? <></> : <Logo logo={logo} />;
  const _newsletter = layout?.hide?.newsletter ? <></> : (
    <Newsletter
      content={newsletter}
      tiled={layout?.variation == "Variation 4" ||
        layout?.variation == "Variation 5"}
    />
  );
  const _sectionLinks = layout?.hide?.sectionLinks ? <></> : (
    <FooterItems
      sections={sections}
      justify={layout?.variation == "Variation 2" ||
        layout?.variation == "Variation 3"}
    />
  );
  const _social = layout?.hide?.socialLinks
    ? <></>
    : <Social content={social} vertical={layout?.variation == "Variation 3"} />;
  const _payments = layout?.hide?.paymentMethods
    ? <></>
    : <PaymentMethods content={payments} />;
  const _apps = layout?.hide?.mobileApps
    ? <></>
    : <MobileApps content={mobileApps} />;
  const _region = layout?.hide?.regionOptions
    ? <></>
    : <RegionSelector content={regionOptions} />;
  const _links = layout?.hide?.extraLinks
    ? <></>
    : <ExtraLinks content={extraLinks} />;

  return (
    <>
      {isHomePage
        ? (
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
        )
        : (
          <footer
            class={`w-full flex flex-col pt-5 lg:pb-5 bg-[#ff6c14] text-white text-sm`}
          >
            <SecondaryFooter />
          </footer>
        )}
    </>
  );
}

export default Footer;
