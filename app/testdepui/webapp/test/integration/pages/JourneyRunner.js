sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/evorait/testdepui/testdepui/test/integration/pages/BooksList",
	"com/evorait/testdepui/testdepui/test/integration/pages/BooksObjectPage"
], function (JourneyRunner, BooksList, BooksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/evorait/testdepui/testdepui') + '/test/flpSandbox.html#comevoraittestdepuitestdepui-tile',
        pages: {
			onTheBooksList: BooksList,
			onTheBooksObjectPage: BooksObjectPage
        },
        async: true
    });

    return runner;
});

