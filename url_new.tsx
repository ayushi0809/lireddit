const ngrok_ext = "05efe54a7d77"
const is_google_colab = true
export const deploy = is_google_colab ? "http://"+ngrok_ext+".ngrok.io" : "http://localhost:4000"
console.log(deploy);