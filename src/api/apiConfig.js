const apiConfig = {
    baseUrl: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
    originalImage: (imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
};

export default apiConfig;
