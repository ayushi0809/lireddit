const ngrok_ext = "21a9b678b80b"
const is_google_colab = true
export const deploy = is_google_colab ? "http://"+ngrok_ext+".ngrok.io" : "http://localhost:4000"
console.log(deploy);