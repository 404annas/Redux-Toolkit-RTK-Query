import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: "" }); // We are using proxy that's why baseUrl is empty otherwise it will be 'http://localhost:5000/api/

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ["User"],
    endpoints: (builder) => ({})
})