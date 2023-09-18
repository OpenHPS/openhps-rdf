import 'mocha';
import { Absolute2DPosition, CallbackSinkNode, CallbackSourceNode, DataFrame, LengthUnit, Model, ModelBuilder } from '@openhps/core';
import { RDFSerializer, RDFModelSerializer, Thing } from '../../src';

describe('Model', () => {
    const object = new Absolute2DPosition(50.10, 20.5);
    object.unit = LengthUnit.METER;

    describe('serialization', () => {
        let serialized: Thing = undefined;
        let model: Model = undefined;

        before((done) => {
            ModelBuilder.create()
                .from(new CallbackSourceNode(() => {
                    return new DataFrame();
                }))
                .to(new CallbackSinkNode())
                .build().then(m => {
                    model = m;
                    serialized = RDFModelSerializer.serialize(m);
                    serialized.value = "https://test"
                    serialized.termType = "NamedNode"
                    console.log(serialized)
                    done();
                }).catch(done);
        });
        
        it('should have nodes', async () => {
            const turtle = await RDFSerializer.stringify(serialized, {
                prettyPrint: true
            });
            console.log(turtle)
        });

    });

});
