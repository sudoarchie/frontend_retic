import api from "@/app/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllEvent = () => {
  const allBlogs = useQuery({
    queryKey: ["api/blogs"],
    queryFn: async () => {
      const res = await api.get("/evenInit");
      return res?.data;
    },
  });
  return allBlogs;
};

export default useGetAllEvent;
