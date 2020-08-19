describe ("проверка реализовнных методов", function() {
    it ('создаем новый массив с помощью метода forEach', function () {
        expect(forMethodForEach(['a', 'b', 'c'], callbackMethodForEach)).to.deep.equal(['a', 'b', 'c'])
    })

    it ('создаем новый измененный массив с помощью метода map', function () {
        expect(forMethodMap(['alel', 'babel', 'lalala'], callbackForMap)).to.not.equal(['alel', 'babel', 'lalala'])
    })

    it ('ключи с item.length > 7 в новый массив с помощью метода filter', function () {
        expect(forMethodFilter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], callbackForFilter)).to.not.have.all.keys(['exuberant', 'destruction'])
    })

    it ('наявность ключей значение которых > 20 , метод some', function () {
        expect(forMethodSome([9, 20, 33, 14, 15], callbackForSome)).to.deep.equal(true);
    })

    it ('отсутствие item.length < 5 , метод every ', function () {
        expect(forMethorEvery(['exuberant', 'destruction', 'present'], callbackForEvery)).to.deep.equal(false);
    })

    it ('значение item.id === 3, метод find', function () {
        expect(forMethodFind([
            {id: 1, name: "Вася"},
            {id: 2, name: "Петя"},
            {id: 3, name: "Маша"}
        ], callbackForFind)).to.deep.equal(3);
    })

    it ('единоe значениe на основе всего массива = 18 с помощью метода reduce', function () {
        expect(forMethodReduce([2, 4, 0, 3, 9], callbackReduce)).to.deep.equal(18);
    })
})

