const ngrok_ext = "210f8b1585d8"
const is_google_colab = true
export const deploy = is_google_colab ? "http://01c1f4a5f0cc.ngrok.io" : "http://localhost:4000"
console.log(deploy);