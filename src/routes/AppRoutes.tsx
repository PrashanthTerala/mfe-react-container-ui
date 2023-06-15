import React from "react";
import { useRoutes } from "react-router-dom";
import MicroFrontend from "../MicrofrontendLoader/MicroFrontend";

export const Remote01Routes = () => {
  const routes = useRoutes([
    {
      path: "remote01/*",
      element: (
        <MicroFrontend
          module={"./Widget"}
          url={"http://localhost:3001/remoteEntry.js"}
          scope={"mfe_react_remote_01_ui"}
        />
      ),
    },
  ]);
  return routes;
};

// export const Remote02Routes = () => {
//   const routes = useRoutes([
//     {
//       path: "remote02/*",
//       element: (
//         <MicroFrontend
//           module={"./Widget"}
//           url={"http://localhost:3002/remoteEntry.js"}
//           scope={"mfe_react_remote_02_ui"}
//         />
//       ),
//     },
//   ]);
//   return routes;
// };
