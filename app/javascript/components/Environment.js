const development = {
  url: "http://localhost:3000"
}

const production = {
  url: "https://where-is-waldo-production.up.railway.app"
}

export const environment = process.env.NODE_ENV === 'development' ? development : production;