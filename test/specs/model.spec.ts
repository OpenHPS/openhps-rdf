import 'mocha';
import { Absolute2DPosition, CallbackNode, CallbackSinkNode, CallbackSourceNode, DataFrame, LengthUnit, Model, ModelBuilder, MultilaterationNode } from '@openhps/core';
import { RDFSerializer, RDFModelSerializer, Thing } from '../../src';
import { RelativeRSSIProcessing } from '@openhps/rf';

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
                .via(new RelativeRSSIProcessing())
                .via(new MultilaterationNode())
                .to(new CallbackSinkNode())
                .build().then(m => {
                    model = m;
                    serialized = RDFModelSerializer.serialize(m, {
                        baseUri: "http://openhps.org/terms#"
                    });
                    console.log(serialized)
                    done();
                }).catch(done);
        });
        
        it('should have nodes', async () => {
            const turtle = await RDFSerializer.stringify(serialized, {
                prettyPrint: true,
                baseUri: "http://openhps.org/terms#"
            });
            console.log(turtle)
        });

    });

});
