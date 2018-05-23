import { Selector } from 'testcafe';

fixture `depapp's story e2e testing`
    .page `https://tigadesember.github.io/`;

test(`desktop : checking the elements`, async t => {

    await t
        .maximizeWindow()
        .expect(Selector('.image').nth(4))
});