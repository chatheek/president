const { dock, dockStart } = require('@nlpjs/basic');



(async () => {
    await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();
    let result = await nlp.process('who are you');
    console.log(result);

})();