import * as mocha from 'mocha';
import * as path from 'path';
import * as assert from 'assert';
import * as ttm from 'vsts-task-lib/mock-test';

describe('certes-ssl task tests', function () {
    before(() => {
    });

    after(() => {
    });

    it('should succeed with simple inputs', (done: MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'success.ts');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();
        assert(tr.succeeded, 'should have succeeded');

        done();
    }); 
});

//https://gist.github.com/bryanmacfarlane/154f14dd8cb11a71ef04b0c836e5be6e