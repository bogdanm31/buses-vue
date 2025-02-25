import { ref } from 'vue';
import { apiClient } from '@/services/apiClient';

const useHttp = (url) => {
  const isLoading = ref(false);
  const error = ref(null);

  const useHttpPost = async (payload, callbackFn) => {
    isLoading.value = true;
    error.value = null;

    let data;

    try {
      const response = await apiClient.post(url, payload);

      if (response.status !== 200) {
        throw new Error('Request failed!');
      }
      try {
        data = await response.json();
      } catch (err) {
        data = response.data;
        while (data.data) {
          data = data.data;
        }
      }

      if (callbackFn) {
        data = callbackFn(data);
      }
    } catch (err) {
      error.value = err.message || 'Something went wrong!';
    } finally {
      isLoading.value = false;
    }

    return Promise.resolve(data);
  };

  return {
    useHttpPost,
    isLoading,
    error,
  };
};
export default useHttp;
