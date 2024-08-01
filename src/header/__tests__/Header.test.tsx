import {describe, test} from 'vitest';
import {render,fireEvent,waitFor} from '@testing-library/react';
import Header from '../Header';

describe("Header React Micro-frontend application", ()=>{
    test("The header component is rendering correctly", ()=>{
        const component = render(<Header />);
        expect(component).toMatchSnapshot()
    });

    test("The profile data should be displayed if the event is received",async ()=>{
        const component = render(<Header />);
        // const elem1 =component.getByText("Profiles");
        // 
        fireEvent(window,new CustomEvent('profile-order-fetched',{detail :{
            user:{ 
                first_name: 'Test',
                last_name: 'User',
            },
            qty: 10
        } }));
        const elem = component.getByText("Test User");
        console.warn('aaa ',elem)
    });
})