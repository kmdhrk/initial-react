
type Props = {
  srcPc: string;
  srcSp: string;
  alt: string | undefined;
  webp: boolean;
  height: number;
  width: number;
  loadingLazy: boolean;
};

const Picture = (props: Props) => {
  return (
    <picture>
      {props.srcSp ? (
        <source
          type="image/webp"
          media="(max-width: 767px)"
          srcSet={`${props.srcSp}.webp`}
        />
      ) : null}
      {props.webp && props.srcSp ? (
        <source
          type="image/webp"
          media="(max-width: 767px)"
          srcSet={`${props.srcSp}.webp`}
        />
      ) : null}
      {props.webp ? (
        <source type="image/webp" srcSet={`${props.srcPc}.webp`} />
      ) : null}
      <img
        src={props.srcPc}
        alt={props.alt}
        width={props.width}
        height={props.height}
        decoding="async"
        loading={props.loadingLazy ? "lazy" : "eager"}
      />
    </picture>
  );
};

export default Picture;
