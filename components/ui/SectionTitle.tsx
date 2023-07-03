interface Props {
    title?: string;
    fontSize?: "Normal" | "Large";
    alignment: "center" | "left";
    colorReverse?: boolean;
  }
  
  function SectionTitle(props: Props) {
    return (
      <>
        {props.title
          ? (
            <div
              class={`flex flex-col gap-2 py-10 ${
                props.alignment === "left" ? "text-left" : "text-center"
              }`}
            >
              {props.title &&
                (
                  <h1
                    class={`text-3xl leading-8 lg:leading-10 font-bold
                    ${
                      props.colorReverse
                        ? "text-primary-content"
                        : "text-base-content"
                    }
                    ${props.fontSize === "Normal" ? "lg:text-3xl" : "lg:text-4xl"}
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
  