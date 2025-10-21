import { SearchIcon } from 'lucide-react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from './ui/input-group'

export function SearchBar() {
    return (
        <InputGroup>
            <InputGroupInput placeholder="search..."></InputGroupInput>
            <InputGroupAddon>
            <SearchIcon></SearchIcon>
            </InputGroupAddon>
            <InputGroupAddon align={'inline-end'}>
                <InputGroupButton>Predict</InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
}
