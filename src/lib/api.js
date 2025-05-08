import axios from "axios";

export const ENDPOINT = {
    // auth routes
    login: "/auth/login",
    signup: "/auth/signup",
    user: "/user",
    logout: "/auth/logout",
    forgetpassword: "/auth/forgetPassword",
    resetPassword: "/auth/resetPassword",

    // discover routes
    discoverNowPlaying: "/discover/now-playing",
    discoverTrending: "/discover/trending",
    discoverTopRated: "/discover/top-rated",
    discoverUpcoming: "/discover/upcoming",

    // movies routes
    fetchActionMovies: `/movies/action`,
    fetchComedyMovies: `/movies/comedy`,
    fetchHorrorMovies: `/movies/horror`,
    fetchRomanceMovies: `/movies/romance`,
    fetchAnimeMovies: `/movies/anime`,

    // tv shows routes
    fetchActionTvShows: `/tv/action`,
    fetchComedyTvShows: `/tv/comedy`,
    fetchCrimeTvShows: `/tv/crime`,
    fetchDramaTvShows: `/tv/drama`,
    fetchMysteryTvShows: `/tv/mystery`,

    // movie/tv shows details
    getMovieDetails: (id) => `/movies/details?id=${id}`,
    getTvShowsDetails: (id) => `/tv/details?id=${id}`,

    // user
    user: "/user",
    addToWishlist: "/user/wishlist",
    getWishlist: "/user/wishlist",

    // payment
    payment: "/payment/order",
    updatePremium: "/payment/update-premium-access",

    // streaming urls
    fetchAllStreamingVideos: `/video`,
    fetchStreamingVideo: (id) => `/video?id=${id}`,

}

export const media = (path) => `https://image.tmdb.org/t/p/original` + path;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const api = axios.create({
    baseURL: API_BASE_URL,
});