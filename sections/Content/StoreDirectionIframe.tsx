export interface iframeProps {
  mapsParameters?: string;
  iframeHeigth?: string;
  iframeWidth?: string;
}

function StoreDirectionIframe(
  { mapsParameters, iframeHeigth, iframeWidth }: iframeProps,
) {
  return (
    <div>
      <iframe
        src={`https://www.google.com/maps/embed?${mapsParameters}`}
        width={iframeWidth}
        height={iframeHeigth}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  );
}

export default StoreDirectionIframe;
