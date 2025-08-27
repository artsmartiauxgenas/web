<script setup lang="ts">
import { ref } from "vue"

const WEB3FORMS_ACCESS_KEY = "a9da8fa1-6b06-446f-b204-c44ea06b21b9"
const FROM_NAME = "artsmartiauxgenas.fr"
const SUBJECT = "Form Submission"
const name = ref("")
const email = ref("")
const message = ref("")

const submitForm = async () => {
    const result_field = document.getElementById('result')
    result_field.innerHTML = "Envoi du message [ EN COURS ]"
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
  const result = await response.json();
  if (result.success) {
    console.log(result)
    result_field.innerHTML = "Envoi du message [ OK ]"
    result_field.style.color = "green"
  } else {
    console.error(result)
    console.error(result)
    result_field.innerHTML = "Envoi du message [ ERREUR ]"
    result_field.style.color = "red"
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
</style>

<template>
  <form @submit.prevent="submitForm">

    <label for="email" class="form-label">Email</label>
    <input type="email" name="email" id="email" v-model="email" placeholder="adresse@mail.com" required/> 

    <label for="message" class="form-label">Message</label>
    <textarea name="message" id="message" v-model="message" placeholder="message" required></textarea>
    <button type="submit">Envoyer</button>
    <div id="result"></div>
  </form>
</template>