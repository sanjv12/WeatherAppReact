import { Children, createContext,useContext,useState} from "react";

const AppContext = createContext();

export function AppProvider({children}){
    const [city, setCity] = useState("");
    const [weather,setWeather] = useState(null);
    return (
        <AppContext.Provider value={{city,setCity,weather,setWeather}}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext(){
    return useContext(AppContext);
}