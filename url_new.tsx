const ngrok_ext = "210f8b1585d8"
const is_google_colab = true
export const deploy = is_google_colab ? "https://plastic-puma-58.loca.lt" : "http://localhost:4000"
console.log(deploy);