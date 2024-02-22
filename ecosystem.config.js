module.exports = {
  apps : [
    {
      name: "svelte", //localhost:5173
      script: "npm i && npm run dev",
      cwd: "./svelte",
    },
    {
      name: "angular", //localhost:4200
      script: "npm i && npm start",
      cwd: "./angular",
    },
    {
      name: "vue", //localhost:5174
      script: "npm i && npm run dev",
      cwd: "./vue"
    },
    {
      name: "react", //localhost:3000
      script: "npm i && npm start",
      cwd: "./react"
    }
  ]
}
