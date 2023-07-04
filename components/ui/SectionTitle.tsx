interface Props {
  title?: string;
  textColor?: SemanticColors;
}

export type SemanticColors =
  | "primary"
  | "base"
  | "accent";

function SectionTitle(props: Props) {
  const CONTENT_COLORS = {
    primary: "text-primary group-hover:text-primary-content",
    base: "text-base group-hover:text-base-content",
    accent: "text-accent group-hover:text-accent-content",
  };
  return (
    <>
      {props.title
        ? (
          <div class="flex flex-col gap-2 py-8 lg:py-10 text-center">
            {props.title &&
              (
                <h1
                  class={`text-4xl leading-8 lg:leading-10 font-bold
                  ${CONTENT_COLORS[props.textColor ?? "accent"]}
                  `}
                >
                  {props.title}
                </h1>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default SectionTitle;
