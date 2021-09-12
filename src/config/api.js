const WEB = {
    DEV: 'http://localhost:8080',
    PROD: 'https://www.tyrival.com/gallary',
}

const WEB_URL = process.env.NODE_ENV === "development" ? WEB.DEV : WEB.PROD

export default API
