import { ref } from 'vue'
import { projectAuth } from "@/config/firebase";

const error = ref(null)

async function logout(email, password, fullName) {
  error.value = null;
  try {
    const response = await projectAuth.signOut();
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message
  }
}

export function useLogout() {
  return { error, logout }
}