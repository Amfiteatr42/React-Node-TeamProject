// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const HOST = 'https://api-petly.onrender.com/api/';

// export const newsApi = createApi({
//   reducerPath: 'newsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${HOST}news`,
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().users.token;
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       return headers;
//     }
//   }),
//   endpoints: (builder) => ({
//     getNewsList: builder.query({
//       query: () => '/'
//     })
//   })
// });

// export const { useGetNewsListQuery } = newsApi;
