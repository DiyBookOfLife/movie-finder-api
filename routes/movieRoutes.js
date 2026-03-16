import express from "express";
import { searchMovies, getMovieDetails } from "../controllers/movieController";

const router = express.Router();

router.get("/search", searchMovies);
router.get("/movies/:id", getMovieDetails);

export default router;
