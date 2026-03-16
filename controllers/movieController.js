// Implement controller logic
import axios from "axios";

const baseURL = "http://www.omdbapi.com/";

export const searchMovies = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }

  try {
    const response = await axios.get(baseURL, {
      params: {
        s: title,
        apiKey: process.env.OMDB_API_KEY,
      },
    });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
};

export const getMovieDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(baseURL, {
      params: {
        i: id,
        apiKey: process.env.OMDB_API_KEY,
      },
    });
    res.json(response.data);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
};
