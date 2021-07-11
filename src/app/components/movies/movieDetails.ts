export interface MovieDetails {
  "adult": boolean;
  "backdrop_path": string;
  "belongs_to_collection": movieCollection[],
  "budget": number;
  "genres": movieGenres[],
  "homepage": string;
  "id": number;
  "imdb_id": string;
  "original_language": string;
  "original_title": string;
  "overview": string;
  "popularity": number;
  "poster_path": string;
  "production_companies": movieCompanies[],
  "production_countries": movieCountries[],
  "release_date": string;
  "revenue": number;
  "runtime": number;
  "spoken_languages": movieLanguages[],
  "status": string;
  "tagline": string;
  "title": string;
  "video": boolean;
  "vote_average": number;
  "vote_count": number;
}

interface movieCollection {
  "id":86311,
  "name":"The Avengers Collection",
  "poster_path":"/5k6WG11oWrXipYD8BAkmMJU4Men.jpg",
  "backdrop_path":"/zuW6fOiusv4X9nnW3paHGfXcSll.jpg"
}

interface movieGenres {
  id: number;
  name: string;
}

interface movieCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface movieCountries {
  iso_3166_1: string;
  name: string;
}

interface movieLanguages {
  iso_639_1: string;
  name: string;
}
