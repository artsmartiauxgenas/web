---
title: Contact
description: Page de contact
lastUpdated: false
---

<style>
form input,
form textarea {
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

# Nous contacter

> [!TIP] Vous pouvez nous contacter via ce formulaire, ou à l'adresse : <a href="mailto:info@amgenas.fr">info@amgenas.fr</a>

<form action="https://api.web3forms.com/submit" method="POST">

  <!-- REQUIRED: Your Access key here. Don't worry this can be public -->
  <input type="hidden" name="access_key" value="a9da8fa1-6b06-446f-b204-c44ea06b21b9">

  <!-- Optional: Subject an be prefilled using type="hidden"
       or type="text" for normal user submitted input -->
  <input type="hidden" name="subject" value="Contact depuis le site">

  <!-- Optional: From Name you want to see in the email
       Default is "Notifications". you can overwrite here -->
  <input type="hidden" name="from_name" value="artsmartiauxgenas.fr">

  <!-- Optional: To send the form submission as CC email
       This feature available to PRO Plan users only 
  <input type="hidden" name="ccemail" value="partner@example.com"> -->

  <!-- Optional: Default replyto will be "email" field (if available)
       you may overwrite replyto with different email here -->
  <input type="hidden" name="replyto" value="contact@amgenas.fr">

  <!-- Optional: Custom Redirection or Thank you Page
       Make sure you add full URL including https:// -->
  <input type="hidden" name="redirect" value="https://artsmartiauxgenas.fr/success">

  <!-- Optional: But Recommended: To Prevent SPAM Submission.
       Make sure its hidden by default -->
  <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
  
  <!-- hCaptcha: Recommended for Advanced Spam Protection.
  <div class="h-captcha" data-captcha="true"></div> -->

  <!-- Google reCaptcha & Cloudflare Turnstile:
       This feature is available for paid users only
  <input type="hidden" name="recaptcha_response" id="recaptchaResponse">
  <div class="cf-turnstile" data-sitekey="<YOUR_SITE_KEY>"></div> -->
  
  <!-- Webhooks: Send your form data to Notion, Google Sheets or Zapier.
       This feature is available for paid users only
  <input type="hidden" name="webhook" value="WEBHOOK_URL_HERE" /> -->

  <!-- Attachments: Make sure the <form> has enctype="multipart/form-data"
       This feature is available for paid users only
  <input type="file" name="attachment" /> -->
  
  <!-- Advanced File Upload: This feature is available for paid users only
  <input type="hidden" data-fileupload="true" /> -->

  <!-- Custom Form Data: Form data you wish to receive in email. -->
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="email@domain.com" required>

  <label for="message">Message</label>
  <textarea name="message" id="message" rows="5" placeholder="Votre message..." required></textarea>

  <input type="submit" value="Envoyer">

</form>
