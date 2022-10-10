import { useLocation } from "react-router-dom";
import { Input } from "../Input";
import { Wrapper } from "./styled";

export const Search = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search");

    const onInputChange = ({ target }) => {
        if (target.value.trim() === "") {
            searchParams.delete("search");
        } else {
            searchParams.set("search", target.value);
        };
    };

    return (
        <Wrapper>
            <Input
                placeholder="Type here to find a task"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};