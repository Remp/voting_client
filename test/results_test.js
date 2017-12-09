import {expect} from 'chai';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import React from 'react';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} from 'react-dom/test-utils';
import {Results} from '../src/components/Results';

describe('Results', () => {
    it('рендерит при любом количестве голосов', () => {
        const pairs = List.of("Transpoinig", "27 days later");  
        const tally = new Map({
            Transpoinig: 3,
            '27 days later': 2
        });      
        const component = renderIntoDocument(<Results pairs={pairs} tally={tally}/>);
        const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
        const [train, days] = entries.map(entry => entry.textContent);

        expect(entries.length).to.equal(2);
        expect(train).to.contain('Transpoinig');
        expect(train).to.contain('3');

        expect(days).to.contain('27 days later');
        expect(days).to.contain('2');
    });
    it('кнопка Next работает', () => {
        const pairs = List.of("Transpoinig", "27 days later");  
        const tally = new Map({
            Transpoinig: 3,
            '27 days later': 2
        }); 
        let isNext;
        const next = () => isNext = true;     
        const component = renderIntoDocument(<Results pairs={pairs} tally={tally} next={next}/>);
        const elem = ReactDOM.findDOMNode(component.result);
        Simulate.click(elem);
        expect(isNext).to.equal(true);
    });
    it('определяет победителя', () => {
        const pairs = List.of("Transpoinig", "27 days later");  
        const tally = new Map({
            Transpoinig: 3,
            '27 days later': 2
        }); 
        const component = renderIntoDocument(<Results pairs={pairs} tally={tally} winner='Transpoinig'/>)
        const winner = ReactDOM.findDOMNode(component.winner);
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Transpoinig');
    });
    
})
