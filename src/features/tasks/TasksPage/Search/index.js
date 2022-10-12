import { Input } from "../Input";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { Wrapper } from "./styled";

export const Search = () => {

    const query = useQueryParameter("search");
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: "search",
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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