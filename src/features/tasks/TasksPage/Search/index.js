import { useLocation } from "react-router-dom";
import { Input } from "../Input";
import { Wrapper } from "./styled";

export const Search = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search");

    return (
        <Wrapper>
            <Input
                placeholder="Type here to find a task"
                value={query || ""}
            />
        </Wrapper>
    );
};