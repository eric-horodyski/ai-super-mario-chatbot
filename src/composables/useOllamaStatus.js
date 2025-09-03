import { ref } from 'vue';
import axios from 'axios';

export const useOllamaStatus = () => {
  const isOnline = ref(false);

  const checkStatus = async () => {
    try {
      const url = `${import.meta.env.OLLAMA_BASE_URL}/api/tags`;
      const res = await axios.get(url, { timeout: 2500 });
      isOnline.value = res.status >= 200 && res?.status < 300;
    } catch {
      isOnline.value = false;
    }
  };

  return { isOnline, checkStatus };

};