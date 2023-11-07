import Layout from "./Layout";
import AboutPage from "./pages/AboutPages";
import ContactPage from "./pages/ContactPages";
import CharactersPage from "./pages/CharactersPages";

const route = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <CharactersPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
];

export default route;
