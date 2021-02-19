import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('<AddCategory Pruebas', () => {

    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategory = {setCategory}/>);

    beforeEach( ()=>{

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategory = {setCategory}/>);

    });

    test('Debe mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Algo';
        input.simulate('change', {target: {value:value}});

       //para comprobarlo habría que escribir en otro objeto
       //y luego comprobarlo, por lo que por el momento no hay expect

    });

    test('NO debe de hacer Submit', () => {

        const frm = wrapper.find('form');
        
        frm.simulate('submit', {
                preventDefault:()=>{}});

        expect(setCategory).not.toHaveBeenCalled();
        
    });

    test('Debe de llamar el setCategory y limpiar la caja de texto ', () => {

        //Preparacion
        const input = wrapper.find('input');
        const value = 'Algo mayor de 2 caracteres';
        input.simulate('change', {target: {value:value}});

        //submit
        const frm = wrapper.find('form');        
        frm.simulate('submit', {
                preventDefault:()=>{}});

        //validaciones
        expect(setCategory).toHaveBeenCalled();
        expect(setCategory).toHaveBeenCalledWith( expect.any(Function) );

        const vInput  = input.prop('value');
        expect(vInput).toBe('');        
        
    })
    


    

});