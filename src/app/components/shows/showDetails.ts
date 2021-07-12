export interface ShowDetails {
  backdrop_path: string;
  created_by: showCreators[];
  episode_run_time: number[];
  first_air_date: string;
  genres: showGenres[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: showLastEpisode;
  name: string;
  next_episode_to_air: null;
  networks: showNetworks[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: showProductCompany[];
  production_countries: showProductionCountries[];
  seasons: showSeason[];
  spoken_languages: showLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

interface showCreators {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

interface showGenres {
  id: number;
  name: string;
}

interface showLastEpisode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface showNetworks {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

interface showProductCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface showProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface showSeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface showLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
