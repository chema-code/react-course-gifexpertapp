import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe ('<GifGridItem /> Pruebas', () =>{

    const title = 'Un titulo';
    const url = 'http://localhost/img.gif';

    const wrapper = shallow(<GifGridItem 
        title= {title}
        url={url}
    />);

    test('Debe mostrar el componente correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Titulo se mustra correctametne', () =>{

        const vTitle = wrapper.find('p').text().trim();
        expect(vTitle).toBe(title);

    });

    test('Imagen debe tener el src y alt correctos', () =>{

        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('Debe tener animate__fadeIn', () =>{

        const expectedClass = "animate__fadeIn";
        const div = wrapper.find('div');
        expect( div.prop('className').includes(expectedClass) ).toBe( true );
       
    });
    

});