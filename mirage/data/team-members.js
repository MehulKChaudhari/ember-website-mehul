const mapIdToAttributes = new Map([
  [
    'alex-matchneer',
    {
      added: new Date('2013-09-10'),
      first: 'Alex',
      github: 'https://github.com/machty',
      id: 'alex-matchneer',
      image: 'amatchneer.jpg',
      last: 'Matchneer',
      name: 'Alex Matchneer',
      teams: ['alumni'],
      twitter: 'https://twitter.com/machty',
    },
  ],
  [
    'alex-navasardyan',
    {
      added: new Date('2018-03-16'),
      first: 'Alex',
      github: 'https://github.com/twokul',
      id: 'alex-navasardyan',
      image: 'anavasardyan.jpg',
      last: 'Navasardyan',
      name: 'Alex Navasardyan',
      teams: ['cli'],
      twitter: 'https://twitter.com/twokul',
    },
  ],
  [
    'amy-lam',
    {
      added: new Date('2018-10-20'),
      first: 'Amy',
      github: 'https://github.com/amyrlam',
      id: 'amy-lam',
      image: 'alam.jpg',
      last: 'Lam',
      name: 'Amy Lam',
      teams: ['learning'],
      twitter: 'https://twitter.com/amyrlam',
    },
  ],
  [
    'brendan-mc-loughlin',
    {
      added: new Date('2016-04-14'),
      first: 'Brendan',
      github: 'https://github.com/bmac',
      id: 'brendan-mc-loughlin',
      image: 'bmcloughlin.png',
      last: 'McLoughlin',
      name: 'Brendan McLoughlin',
      teams: ['alumni'],
      twitter: 'https://twitter.com/BezoMaxo',
    },
  ],
  [
    'chad-hietala',
    {
      added: new Date('2016-04-14'),
      first: 'Chad',
      github: 'https://github.com/chadhietala',
      id: 'chad-hietala',
      image: 'chietala.jpg',
      last: 'Hietala',
      name: 'Chad Hietala',
      teams: ['corejs'],
      twitter: 'https://twitter.com/chadhietala',
    },
  ],
  [
    'chris-garrett',
    {
      added: new Date('2019-04-25'),
      first: 'Chris',
      github: 'https://github.com/pzuraq',
      id: 'chris-garrett',
      image: 'cgarrett.jpg',
      last: 'Garrett',
      name: 'Chris Garrett',
      teams: ['corejs'],
      twitter: 'https://twitter.com/pzuraq',
    },
  ],
  [
    'chris-manson',
    {
      added: new Date('2018-10-20'),
      first: 'Chris',
      github: 'https://github.com/mansona',
      id: 'chris-manson',
      image: 'cmanson.jpg',
      last: 'Manson',
      name: 'Chris Manson',
      teams: ['learning'],
      twitter: 'https://twitter.com/real_ate',
    },
  ],
  [
    'chris-thoburn',
    {
      added: new Date('2019-01-01'),
      first: 'Chris',
      github: 'https://github.com/runspired',
      id: 'chris-thoburn',
      image: 'cthoburn.jpg',
      last: 'Thoburn',
      name: 'Chris Thoburn',
      teams: ['data'],
      twitter: 'https://twitter.com/runspired',
    },
  ],
  [
    'christoffer-persson',
    {
      added: new Date('2016-04-15'),
      first: 'Christoffer',
      github: 'https://github.com/wecc',
      id: 'christoffer-persson',
      image: 'cpersson.jpg',
      last: 'Persson',
      name: 'Christoffer Persson',
      teams: ['alumni'],
      twitter: 'https://twitter.com/ChristofferP',
    },
  ],
  [
    'clemens-muller',
    {
      added: new Date('2016-04-15'),
      first: 'Clemens',
      github: 'https://github.com/pangratz',
      id: 'clemens-muller',
      image: 'cmueller.jpg',
      last: 'Müller',
      name: 'Clemens Müller',
      teams: ['alumni'],
      twitter: 'https://twitter.com/pangratz',
    },
  ],
  [
    'dan-gebhardt',
    {
      added: new Date('2016-04-15'),
      first: 'Dan',
      github: 'https://github.com/dgeb',
      id: 'dan-gebhardt',
      image: 'dgeb.jpg',
      last: 'Gebhardt',
      name: 'Dan Gebhardt',
      teams: ['corejs', 'data'],
      twitter: 'https://twitter.com/dgeb',
    },
  ],
  [
    'david-baker',
    {
      added: new Date('2016-04-14'),
      first: 'David',
      github: 'https://github.com/acorncom',
      id: 'david-baker',
      image: 'dbaker.jpg',
      last: 'Baker',
      name: 'David Baker',
      teams: ['alumni'],
      twitter: 'https://twitter.com/acorncom',
    },
  ],
  [
    'david-hamilton',
    {
      added: new Date('2019-03-27'),
      first: 'David',
      github: 'https://github.com/hjdivad',
      id: 'david-hamilton',
      image: 'dhamilton.jpg',
      last: 'Hamilton',
      name: 'David Hamilton',
      teams: ['data'],
      twitter: 'https://twitter.com/hjdivad',
    },
  ],
  [
    'edward-faulkner',
    {
      added: new Date('2015-04-08'),
      first: 'Edward',
      github: 'https://github.com/ef4',
      id: 'edward-faulkner',
      image: 'efaulkner.jpg',
      last: 'Faulkner',
      name: 'Edward Faulkner',
      teams: ['corejs', 'steering'],
      twitter: 'https://twitter.com/eaf4',
    },
  ],
  [
    'erik-bryn',
    {
      added: new Date('2013-04-02'),
      first: 'Erik',
      github: 'https://github.com/ebryn',
      id: 'erik-bryn',
      image: 'ebryn.jpg',
      last: 'Bryn',
      name: 'Erik Bryn',
      teams: ['alumni'],
      twitter: 'https://twitter.com/ebryn',
    },
  ],
  [
    'godfrey-chan',
    {
      added: new Date('2016-07-12'),
      first: 'Godfrey',
      github: 'https://github.com/chancancode',
      id: 'godfrey-chan',
      image: 'godfrey.jpg',
      last: 'Chan',
      name: 'Godfrey Chan',
      teams: ['corejs'],
      twitter: 'https://twitter.com/chancancode',
    },
  ],
  [
    'igor-terzic',
    {
      added: new Date('2014-12-09'),
      first: 'Igor',
      github: 'https://github.com/igorT',
      id: 'igor-terzic',
      image: 'iterzic.jpg',
      last: 'Terzic',
      name: 'Igor Terzic',
      teams: ['corejs', 'data'],
      twitter: 'https://twitter.com/terzicigor',
    },
  ],
  [
    'isaac-lee',
    {
      added: new Date('2020-06-18'),
      first: 'Isaac',
      github: 'https://github.com/ijlee2',
      id: 'isaac-lee',
      image: 'ilee.jpg',
      last: 'Lee',
      name: 'Isaac Lee',
      teams: ['learning'],
      twitter: null,
    },
  ],
  [
    'jacob-bixby',
    {
      added: new Date('2016-04-15'),
      first: 'Jacob',
      github: 'https://github.com/trabus',
      id: 'jacob-bixby',
      image: 'jbixby.jpg',
      last: 'Bixby',
      name: 'Jacob Bixby',
      teams: ['alumni'],
      twitter: 'https://twitter.com/trabus',
    },
  ],
  [
    'jared-galanis',
    {
      added: new Date('2020-06-18'),
      first: 'Jared',
      github: 'https://github.com/jaredgalanis',
      id: 'jared-galanis',
      image: 'jgalanis.jpg',
      last: 'Galanis',
      name: 'Jared Galanis',
      teams: ['learning'],
      twitter: 'https://twitter.com/jaredgalanis',
    },
  ],
  [
    'jen-weber',
    {
      added: new Date('2017-09-24'),
      first: 'Jen',
      github: 'https://github.com/jenweber',
      id: 'jen-weber',
      image: 'jweber.jpg',
      last: 'Weber',
      name: 'Jen Weber',
      teams: ['learning'],
      twitter: 'https://twitter.com/jwwweber',
    },
  ],
  [
    'jessica-jordan',
    {
      added: new Date('2017-09-24'),
      first: 'Jessica',
      github: 'https://github.com/jessica-jordan',
      id: 'jessica-jordan',
      image: 'jjordan.jpg',
      last: 'Jordan',
      name: 'Jessica Jordan',
      teams: ['learning'],
      twitter: 'https://twitter.com/jjordan_dev',
    },
  ],
  [
    'katie-gengler',
    {
      added: new Date('2016-04-14'),
      first: 'Katie',
      github: 'https://github.com/kategengler',
      id: 'katie-gengler',
      image: 'kgengler.jpg',
      last: 'Gengler',
      name: 'Katie Gengler',
      teams: ['corejs', 'cli', 'steering'],
      twitter: 'https://twitter.com/katiegengler',
    },
  ],
  [
    'kelly-selden',
    {
      added: new Date('2016-04-16'),
      first: 'Kelly',
      github: 'https://github.com/kellyselden',
      id: 'kelly-selden',
      image: 'kellyselden.jpg',
      last: 'Selden',
      name: 'Kelly Selden',
      teams: ['cli'],
      twitter: 'https://twitter.com/kellyselden',
    },
  ],
  [
    'kenneth-larsen',
    {
      added: new Date('2018-12-22'),
      first: 'Kenneth',
      github: 'https://github.com/kennethlarsen',
      id: 'kenneth-larsen',
      image: 'klarsen.jpg',
      last: 'Larsen',
      name: 'Kenneth Larsen',
      teams: ['learning'],
      twitter: 'https://twitter.com/kennethlarsen',
    },
  ],
  [
    'krati-ahuja',
    {
      added: new Date('2017-05-26'),
      first: 'Krati',
      github: 'https://github.com/kratiahuja',
      id: 'krati-ahuja',
      image: 'kratiahuja.jpg',
      last: 'Ahuja',
      name: 'Krati Ahuja',
      teams: ['cli'],
      twitter: 'https://twitter.com/kratiahuja',
    },
  ],
  [
    'kris-selden',
    {
      added: new Date('2013-04-02'),
      first: 'Kris',
      github: 'https://github.com/krisselden',
      id: 'kris-selden',
      image: 'kselden.jpg',
      last: 'Selden',
      name: 'Kris Selden',
      teams: ['corejs'],
      twitter: 'https://twitter.com/krisselden',
    },
  ],
  [
    'krystan-huffmenne',
    {
      added: new Date('2023-05-19'),
      first: 'Krystan',
      github: 'https://github.com/gitKrystan',
      id: 'krystan-huffmenne',
      image: 'khuffmenne.jpg',
      last: 'HuffMenne',
      name: 'Krystan HuffMenne',
      teams: ['typescript'],
      twitter: 'https://twitter.com/hm_krystan',
    },
  ],
  [
    'leah-silber',
    {
      added: new Date('2013-04-02'),
      first: 'Leah',
      github: 'https://github.com/wifelette',
      id: 'leah-silber',
      image: 'lsilber.jpg',
      last: 'Silber',
      name: 'Leah Silber',
      teams: ['corejs', 'learning', 'steering'],
      twitter: 'https://twitter.com/wifelette',
    },
  ],
  [
    'martin-munoz',
    {
      added: new Date('2015-06-23'),
      first: 'Martin',
      github: 'https://github.com/mmun',
      id: 'martin-munoz',
      image: 'mmunoz.jpg',
      last: 'Muñoz',
      name: 'Martin Muñoz',
      teams: ['alumni'],
      twitter: 'https://twitter.com/_mmun',
    },
  ],
  [
    'matthew-beale',
    {
      added: new Date('2015-04-08'),
      first: 'Matthew',
      github: 'https://github.com/mixonic',
      id: 'matthew-beale',
      image: 'mbeale.jpg',
      last: 'Beale',
      name: 'Matthew Beale',
      teams: ['corejs'],
      twitter: 'https://twitter.com/mixonic',
    },
  ],
  [
    'melanie-sumner',
    {
      added: new Date('2017-11-28'),
      first: 'Melanie',
      github: 'https://github.com/melsumner',
      id: 'melanie-sumner',
      image: 'msumner.jpg',
      last: 'Sumner',
      name: 'Melanie Sumner',
      teams: ['corejs'],
      twitter: 'https://twitter.com/melaniersumner',
    },
  ],
  [
    'nathan-hammond',
    {
      added: new Date('2016-05-12'),
      first: 'Nathan',
      github: 'https://github.com/nathanhammond',
      id: 'nathan-hammond',
      image: 'nhammond.jpg',
      last: 'Hammond',
      name: 'Nathan Hammond',
      teams: ['alumni'],
      twitter: 'https://twitter.com/nathanhammond',
    },
  ],
  [
    'peter-wagenet',
    {
      added: new Date('2013-04-02'),
      first: 'Peter',
      github: 'https://github.com/wagenet',
      id: 'peter-wagenet',
      image: 'pwagenet.jpg',
      last: 'Wagenet',
      name: 'Peter Wagenet',
      teams: ['corejs'],
    },
  ],
  [
    'ricardo-mendes',
    {
      added: new Date('2016-04-14'),
      first: 'Ricardo',
      github: 'https://github.com/locks',
      id: 'ricardo-mendes',
      image: 'rmendes.jpg',
      last: 'Mendes',
      name: 'Ricardo Mendes',
      teams: ['corejs', 'learning'],
      twitter: 'https://twitter.com/locks',
    },
  ],
  [
    'robert-jackson',
    {
      added: new Date('2014-03-26'),
      first: 'Robert',
      github: 'https://github.com/rwjblue',
      id: 'robert-jackson',
      image: 'rjackson.jpg',
      last: 'Jackson',
      name: 'Robert Jackson',
      teams: ['corejs', 'cli', 'data'],
      twitter: 'https://twitter.com/rwjblue',
    },
  ],
  [
    'robbie-wagner',
    {
      added: new Date('2019-06-03'),
      first: 'Robbie',
      github: 'https://github.com/RobbieTheWagner',
      id: 'robbie-wagner',
      image: 'rwagner.jpg',
      last: 'Wagner',
      name: 'Robbie Wagner',
      teams: ['learning'],
      twitter: 'https://twitter.com/RobbieTheWagner',
    },
  ],
  [
    'sivakumar-kailasam',
    {
      added: new Date('2017-07-17'),
      first: 'Sivakumar',
      github: 'https://github.com/sivakumar-kailasam',
      id: 'sivakumar-kailasam',
      image: 'skailasam.jpg',
      last: 'Kailasam',
      name: 'Sivakumar Kailasam',
      teams: ['alumni'],
      twitter: 'https://twitter.com/sivakumar_k',
    },
  ],
  [
    'stanley-stuart',
    {
      added: new Date('2016-04-15'),
      first: 'Stanley',
      github: 'https://github.com/fivetanley',
      id: 'stanley-stuart',
      image: 'fivetanley.jpg',
      last: 'Stuart',
      name: 'Stanley Stuart',
      teams: ['alumni'],
      twitter: 'https://twitter.com/fivetanley',
    },
  ],
  [
    'stefan-penner',
    {
      added: new Date('2013-04-02'),
      first: 'Stefan',
      github: 'https://github.com/stefanpenner',
      id: 'stefan-penner',
      image: 'spenner.jpg',
      last: 'Penner',
      name: 'Stefan Penner',
      teams: ['alumni'],
      twitter: 'https://twitter.com/stefanpenner',
    },
  ],
  [
    'terence-lee',
    {
      added: new Date('2017-07-17'),
      first: 'Terence',
      github: 'https://github.com/hone',
      id: 'terence-lee',
      image: 'tlee.png',
      last: 'Lee',
      name: 'Terence Lee',
      teams: ['alumni'],
      twitter: 'https://twitter.com/hone02',
    },
  ],
  [
    'tobias-bieniek',
    {
      added: new Date('2016-05-12'),
      first: 'Tobias',
      github: 'https://github.com/Turbo87',
      id: 'tobias-bieniek',
      image: 'tbieniek.jpg',
      last: 'Bieniek',
      name: 'Tobias Bieniek',
      teams: ['alumni'],
      twitter: 'https://twitter.com/TobiasBieniek',
    },
  ],
  [
    'todd-jordan',
    {
      added: new Date('2016-04-14'),
      first: 'Todd',
      github: 'https://github.com/toddjordan',
      id: 'todd-jordan',
      image: 'tjordan.jpg',
      last: 'Jordan',
      name: 'Todd Jordan',
      teams: ['alumni'],
      twitter: 'https://twitter.com/tddjordan',
    },
  ],
  [
    'tom-dale',
    {
      added: new Date('2013-04-02'),
      first: 'Tom',
      github: 'https://github.com/tomdale',
      id: 'tom-dale',
      image: 'tdale.jpg',
      last: 'Dale',
      name: 'Tom Dale',
      teams: ['corejs', 'steering'],
      twitter: 'https://twitter.com/tomdale',
    },
  ],
  [
    'trek-glowacki',
    {
      added: new Date('2013-04-02'),
      first: 'Trek',
      github: 'https://github.com/trek',
      id: 'trek-glowacki',
      image: 'tglowacki.jpg',
      last: 'Glowacki',
      name: 'Trek Glowacki',
      teams: ['alumni'],
      twitter: 'https://twitter.com/trek',
    },
  ],
  [
    'yehuda-katz',
    {
      added: new Date('2013-04-02'),
      first: 'Yehuda',
      github: 'https://github.com/wycats',
      id: 'yehuda-katz',
      image: 'ykatz.jpg',
      last: 'Katz',
      name: 'Yehuda Katz',
      teams: ['corejs', 'steering'],
      twitter: 'https://twitter.com/wycats',
    },
  ],
]);

// Default export is for loading data into Mirage
export default Array.from(mapIdToAttributes.values());

// Named export is for unit testing the model
function getAttributesForId(id) {
  return mapIdToAttributes.get(id);
}

export { getAttributesForId };
