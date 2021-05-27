import {fireEvent, render, screen} from "@testing-library/react";
import VideosToWatch from '../Search/VideosToWatch';

describe('VideosToWatch component', () =>
{
    it('renders successfully', () => {
        const container = render(<VideosToWatch />);
        const h2 = container.getByText('Video Title');
    })

}
)