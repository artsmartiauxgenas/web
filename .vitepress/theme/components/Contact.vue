<script setup lang="ts">
import { ref } from "vue"

const WEB3FORMS_ACCESS_KEY = "a9da8fa1-6b06-446f-b204-c44ea06b21b9"
const FROM_NAME = "artsmartiauxgenas.fr"
const SUBJECT = "Form Submission"
const name = ref("")
const email = ref("")
const message = ref("")
const sending = ref(false)
const status = ref<"" | "sending" | "ok" | "error">("")

const submitForm = async () => {
  if (sending.value) return
  sending.value = true
  status.value = "sending"
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: FROM_NAME,
        subject: SUBJECT,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
    const result = await response.json()
    if (result.success) {
      status.value = "ok"
      email.value = ""
      message.value = ""
    } else {
      console.error(result)
      status.value = "error"
    }
  } catch (e) {
    console.error(e)
    status.value = "error"
  } finally {
    sending.value = false
  }
}
</script>

<style>
form input,
form textarea,
form button {
  font-family: Arial, sans-serif;
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 12px;
  box-sizing: border-box;
  border: 1px solid darkgray;
  border-radius: 4px;
}

form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

<template>
  <form @submit.prevent="submitForm">

    <label for="email" class="form-label">Email</label>
    <input type="email" name="email" id="email" v-model="email" placeholder="adresse@mail.com" required/> 

    <label for="message" class="form-label">Message</label>
    <textarea name="message" id="message" v-model="message" placeholder="message" required></textarea>
    <button type="submit" :disabled="sending" :aria-busy="sending">
      {{ sending ? "Envoi en cours…" : "Envoyer" }}
    </button>
    <div class="form-result" role="status" aria-live="polite">
      <span v-if="status === 'ok'" style="color: green">Message envoyé, merci !</span>
      <span v-else-if="status === 'error'" style="color: red">Erreur lors de l'envoi, veuillez réessayer ou nous écrire à info@amgenas.fr.</span>
    </div>
  </form>
</template>