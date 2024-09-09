import api from "@/app/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

interface EventData {
  // Define the shape of your event data here
  price: number;
  ticketNo: number;
  image: string;
  // Add other properties
}

const CreateNewEvent = () => {
  return useMutation<any, Error, EventData>({
    mutationKey: ["createEvent"],
    mutationFn: async (data: EventData) => {
      const res = await api.post("/evenInit/", data);
      return res.data;
    },
    onMutate: () => {
      toast.loading("Creating event...");
    },
    onSuccess: (data) => {
      toast.dismiss();
      toast.success("Event created successfully");
      return data;
    },
    onError: (error: Error) => {
      toast.dismiss();
      toast.error(error.message || "Failed to create event");
    },
  });
};

export default CreateNewEvent;
