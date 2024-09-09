import api from "@/app/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const EventLogin = () => {
  const mutate = useMutation({
    mutationKey: ["/addtoForm"],
    mutationFn: async (data: any) => {
      const res = await api.post("/eventAuth/login", data);
      return res.data;
    },
    onMutate: () => {
      toast.loading("Waiting...");
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success("Form filled successfully");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return mutate;
};

export default EventLogin;
