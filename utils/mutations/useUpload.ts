import api, { Imageapi } from "@/app/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useUpload = () => {
  return useMutation({
    mutationKey: ["imageUpload"],
    mutationFn: async (info: any) => {
      const formData = new FormData();
      formData.append("image", info.image[0]);
      const res = await Imageapi.post("/upload", formData);
      return res.data;
    },
    onMutate: () => {
      toast.loading("Uploading image...");
    },
    onSuccess: async (data, info) => {
      toast.dismiss();
      toast.success("Image uploaded successfully");
      console.log(data);
      delete info.image;
      info["image"] = data.fileUrl;
      info.price = Number(info.price);
      info.ticketNo = Number(info.ticketNo);
      const res = await api.post("/evenInit", info);
      console.log(res.data);
    },
    onError: (error: Error) => {
      toast.dismiss();
      toast.error(error.message || "Failed to upload image");
    },
  });
};

export default useUpload;
