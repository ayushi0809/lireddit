const ngrok_ext = "210f8b1585d8"
const is_google_colab = true
export const deploy = is_google_colab ? "http://27bf7a512fb2.ngrok.io" : "http://localhost:4000"
console.log(deploy);