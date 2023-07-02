export interface iframeProps {
  source: string;
  heigth: string;
  width?: string;
}

function StoreDirectionIframe(
  { source, heigth }: iframeProps,
) {
  return (
    <iframe
      src={source}
      width="100%"
      height={heigth}
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  );
}

export default StoreDirectionIframe;
