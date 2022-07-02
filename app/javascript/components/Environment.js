const development = {
  url: "http://localhost:3000"
}

const production = {
  url: "https://waldo-is-where.herokuapp.com/"
}

export const environment = process.env.NODE_ENV === 'development' ? development : production;