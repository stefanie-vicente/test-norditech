import { ref } from "vue";
import axios from "../axiosInstance";

export function useDataFetch() {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await axios.get("/data");
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, fetchData };
}
