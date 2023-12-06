import Layout from "./Layout";
import AboutPages from "./pages/AboutPages";
import ContactPages from "./pages/ContactPages";
import CharactersPages from "./pages/CharactersPages";
import ComparePages from "./pages/compareCharacters";

import CharacterDetailPage from "./pages/CharacterDetailPage";
import { getCharacterById, getCharacters } from "./api/character-api";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <CharactersPages />,
                loader: ({request}) => {
                    const url = new URL(request.url);
                    const orderBy = url.searchParams.get("orderBy");
                    const order = url.searchParams.get("order");

                    if (orderBy && order) {
                        return getCharacters(orderBy, order);
                    }else{
                        return getCharacters();
                    }
                },
            },
            {
                path: "/Compare", 
                element: <ComparePages /> 
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: ({ params }) => getCharacterById(params.id),
            },
            { 
                path: "/about", 
                element: <AboutPages /> 
            },
            { 
                path: "/contact", 
                element: <ContactPages /> 
            },
        ],
    },
];

export default routes;