import { uploadToS3 } from "../../utils/aws/s3/putObject";
import toast from "react-hot-toast";
import { getObectFromS3 } from "../../utils/aws/s3/getObject";
import { useState } from "react";

type ImageInputProps = {
  imageUrl: { url: string; key: string };
  setImageUrl: React.Dispatch<
    React.SetStateAction<{ url: string; key: string }>
  >;
};

function ImageInput({ imageUrl, setImageUrl }: ImageInputProps) {
  const [loading, setLoading] = useState(false);
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setLoading(true);
      const res = await uploadToS3(file);
      if (res.error) {
        toast.error("Upload failed");
        setLoading(false);
      } else {
        const url = await getObectFromS3(res.key);
        setImageUrl((prev) => ({ ...prev, url, key: res.key }));
        setLoading(false);
      }
    }
  };
  return (
    <div>
      <label>
        <div
          className={`${
            loading && "animate-bounce"
          } avatar hover:cursor-pointer `}
        >
          <div
            className={`w-24 border-dashed border-2 rounded-full border-gray-500`}
          >
            <img src={imageUrl.url} />
          </div>
          <span className="absolute top-[100%] text-sm">click to upload</span>
        </div>
        <input
          onChange={handleChange}
          className="hidden"
          type="file"
          accept="image/*"
        />
      </label>
    </div>
  );
}

export default ImageInput;
