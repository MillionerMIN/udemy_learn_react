'use strict';

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(employer => employer).map(item => item.toLowerCase().trim());

const sponsors = {
   cash: [40000, 5000, 30400, 12000],
   eu: ['SRL', 'PLO', 'J&K'],
   rus: ['RusAuto', 'SBO']
};

const { cash, eu, rus } = sponsors;

const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

const money = cash.reduce((sum, current) => sum + current);

const makeBusiness = ({cash, emp, owner = 'Sam', director = 'Victor',}) => {
   console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}.
   And we have a sponsors: ${sumSponsors.join(' ')}.
   Note. Be careful with ${eu[0]}. It's a huge risk.`);
};
makeBusiness({cash: money, emp: employersNames});