import {render, screen} from "@testing-library/react";
import { GifItem } from "../../components/GifItem";


describe('Test: <GifItem/>', () => { 

    const title = 'Saitama';
    const url ='https://one-punch.com/saitama.jpg';

    test('Debe de hacer match c/ Snapshot', async () => {
        
        
        const { container } = render( <GifItem title={title} url={url} /> );
        expect( container).toMatchSnapshot();
});

    test('debe mostrar la img con el URL y el ALT indicado', () => {


        render( <GifItem title={title} url={url} /> );

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title); 
});

 






})