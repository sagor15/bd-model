// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../firbase-init';
// // import Auth from "../firbase-init";

// const RequireAuth = ({ children }) => {
//     return (
//         // const auth = useAuth()
//     //     auth
//     //    location = useLocation() ;

//     if (!auth.user) {
//         // Redirect them to the /login page, but save the current location they were
//         // trying to go to when they were redirected. This allows us to send them
//         // along to that page after they login, which is a nicer user experience
//         // than dropping them off on the home page.
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }

//     return children;
// }
//     );
// };

// export default RequireAuth;