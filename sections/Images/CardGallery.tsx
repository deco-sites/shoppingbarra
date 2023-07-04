import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Header from "$store/components/ui/SectionHeader.tsx";
import PictureObject from "$store/components/ui/PictureObject.tsx";

export interface Content {
  label: string;
  href: string;
  image: LiveImage;
  imageAlt: string;
  featured?: boolean;
}

export interface Props {
  header?: {
    title?: string;
  };
  list?: Content[];
}

function CardGallery(props: Props) {
  const {
    header = {
      title: "",
    },
    list = [],
  } = props;

  const featuredCard = list?.find((content) => (
    content.featured
  ));
  const cardList = list?.filter((content) => (
    !content.featured
  ));

  return (
    <div class="container py-8 flex flex-col gap-8 lg:gap-10 text-base-content px-2">
      <Header
        title={header.title}
        description=""
        alignment="center"
      />
      {/* Main image */}
      <div class="flex flex-col mx-5 md:flex-row mt-2 gap-8 2xl:mx-40">
        {featuredCard
          ? (
            <a
              href={featuredCard.href}
              rel="noopener noreferrer"
              aria-label={`${featuredCard.label} Logo`}
              class="flex flex-col gap-2 md:w-2/3 w-full"
            >
              <PictureObject content={featuredCard} highlight />
            </a>
          )
          : null}
        {/* Secondary images */}
        <div class="flex-col flex md:w-1/3 gap-8 w-full">
          {cardList?.map((content) => (
            <a
              href={content.href}
              rel="noopener noreferrer"
              aria-label={`${content.label} Logo`}
              class="flex flex-col gap-2 w-full"
            >
              <PictureObject content={content} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGallery;
