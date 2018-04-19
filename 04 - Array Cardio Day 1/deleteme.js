    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    }, {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    }, {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    }, {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    }, {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    }, {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    }, {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    }, {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    }, {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    }, {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    }, {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    }, {
        first: 'Hanna',
        last: 'HammarstrÃ¶m',
        year: 1829,
        passed: 1909
    }];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const filtered1500 = inventors.filter(i => {
        return i.year >= 1500 && i.year <= 1599
    });
    console.log('born in 1500s:', filtered1500);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    const firstLast = inventors.map(i => {
        return `${i.first} ${i.last}`
    });
    console.log('first last:', firstLast);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    function compareBDay(a, b) {
        return a.year - b.year;
    }
    const byBdate = inventors.sort(compareBDay);
    console.log('by bday:', byBdate);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?

    const totalLived = inventors.reduce((all, current) => {
        return all + (current.passed - current.year)
    }, 0);

    console.log('total years', totalLived);

    // 5. Sort the inventors by years lived
    function compareYearsLived(a, b) {
        return (b.passed - b.year) - (a.passed - a.year);
    }

    const byYearsLived = inventors.sort(compareYearsLived);

    console.table(byYearsLived);
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    const streetNodes = Array.from(document.querySelectorAll('.mw-category-group a'));
    const deStreets = streetNodes
        .map(link => {
            return link.textContent
        })
        .filter(street => {
            return street.includes('de');
        });
    console.log(deStreets);
    
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    function compNames(a, b) {
        return a > b;
    }

    console.log('lname sort:', people.sort(compNames));

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

    function transpoReduce(types, type) {
        if (types[type]) {
            types[type]++;
        } else {
            types[type] = 1;
        }
        return types;
    }
    const countByType = data.reduce(transpoReduce, {});
    console.table(countByType);