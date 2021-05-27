import {fireEvent, render, screen} from "@testing-library/react";
import VideosToWatch from '../Search/VideosToWatch';

describe('VideosToWatch component', () =>
{
    it('renders successfully', () => {
        const container = render(<VideosToWatch />);
        const h1 = container.getByText('Cowboys');

        // getBy -> throw an error if NO element more than 1 match
        // queryBy -> If no element match, returns NULL. throw error if more than one elements match
        // findBy -> return a PROMISE, 

        // getAllBy

        // ByTitle, ByDisplayValue , ..
    })

}
)