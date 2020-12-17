import { createContext } from "react";

const CustomContext = createContext();
export const CCProvider = CustomContext.Provider;
export const CCConsumer = CustomContext.Consumer;

export default CustomContext;
