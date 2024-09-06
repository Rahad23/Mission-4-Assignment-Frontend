import { GlassMagnifier } from "react-image-magnifiers";

const ImageMagniFire = ({ productImg }: { productImg: string }) => {
  return (
    <div style={{ maxWidth: "100%", position: "relative" }}>
      <GlassMagnifier
        imageSrc={productImg} // Main image // Higher resolution image
        magnifierSize={400} // Adjust magnifier size
        magnifierBorderSize={2}
        magnifierBorderColor="rgba(255, 255, 255, 0.5)"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default ImageMagniFire;
