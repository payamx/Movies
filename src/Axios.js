import axios from "axios";

export  const api=axios.create({baseURL:`http://moviesapi.ir/api/v1`});