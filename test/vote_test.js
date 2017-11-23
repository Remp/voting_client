import Voting from '../src/components/Voting';
import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} from 'react-dom/test-utils';
import {expect} from 'chai';
import {List} from 'immutable'

describe("Vote", () => {
    it("Vote renders", () => {
        const component = renderIntoDocument(<Voting pairs={["Transpoinig", "27 days later"]} />)
        //теперь нужно найти кнопки
        const btns = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(btns.length).to.equal(2);
        expect(btns[0].textContent).to.equal("Transpoinig");
        expect(btns[1].textContent).to.equal('27 days later');
    });
    it("вызывает callback при клике", () => {
        let withVoting;
        const vote = (entry) => withVoting = entry;
        const component = renderIntoDocument(<Voting pairs={["Transpoinig", "27 days later"]} vote={vote} />)
        const btns = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(btns[0]);
        expect(withVoting).to.equal('Transpoinig');               
    });
    it("дизейблит кнопку как только пользователь проголосует", () => {
        const component = renderIntoDocument(
            <Voting 
                pairs={["Transpoinig", "27 days later"]} 
                hasVoted='Transpoinig'
            />
        );
        const btns = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(btns.length).to.equal(2);
        expect(btns[0].hasAttribute('disabled')).to.equal(true);
        expect(btns[1].hasAttribute('disabled')).to.equal(true);        
    });
    it('добавляет лейбл при голосовании', () => {
        const component = renderIntoDocument(
            <Voting 
                pairs={["Transpoinig", "27 days later"]} 
                hasVoted='Transpoinig'
            />
        );
        const btns = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(btns.length).to.equal(2);
        expect(btns[0].textContent).to.contain('Voted')        
    });
    it('выводит победителя', () => {
        const component = renderIntoDocument(<Voting winner='Transpoinig'/>);
        const btns = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(btns.length).to.equal(0);
        const winner = ReactDOM.findDOMNode(component.winner);
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Transpoinig')
    });
    it('отрисовывается как чистый компонент', () => {
        const container = document.createElement('div');
        const pairs = ["Transpoinig", "27 days later"];
        let component = ReactDOM.render(<Voting pairs={pairs} />, container);
        const btns = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(btns[0].textContent).to.equal('Transpoinig');

        //теперь изменим массив
        pairs[0] = '123';
        component = ReactDOM.render(<Voting pairs={pairs} />, container);
        expect(btns[0].textContent).to.equal('Transpoinig');
    });
    it('перерисовывает DOM при изменении свойства', () => {
        const container = document.createElement('div');
        const pairs = List.of("Transpoinig", "27 days later");
        let component = ReactDOM.render(<Voting pairs={pairs} />, container);
        let btns = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(btns[0].textContent).to.equal('Transpoinig');

        //теперь изменим
        const newPairs = pairs.set(0, 'Sunshine');
        component = ReactDOM.render(<Voting pairs={newPairs} />, container);
        btns = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(btns[0].textContent).to.equal('Sunshine');        
    })
})