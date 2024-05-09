import 'mocha';
import { expect } from 'chai';
import { SPARQLGenerator } from '../../src';
import { DataObject } from '@openhps/core';

describe('SPARQLGenerator', () => {
    const generator: SPARQLGenerator<DataObject> = new SPARQLGenerator(DataObject, undefined);

    describe('find', () => {
        it('should generate a simple find query', () => {
            const query = generator.createFindAll({
                displayName: "Maxim",
            });
            console.log(query);
        });

        it('should generate a simple find query on an UID', () => {
            const query = generator.createFindAll({
                uid: "mvdewync",
            });
            console.log(query);
        });

        
        it('should generate a simple find query with a nested property', () => {
            const query = generator.createFindAll({
                position: {
                    x: 10,
                    y: 20
                },
            });
            console.log(query);
        });

        it('should generate a simple find query with a nested property and conditions', () => {
            const query = generator.createFindAll({
                position: {
                    x: {
                        $gt: 10,
                        $lt: 20
                    },
                },
            });
            console.log(query);
        });

        it('should generate a simple find query with optional conditions', () => {
            const query = generator.createFindAll({
                $or: [
                    {
                        displayName: "Maxim",
                    },
                    {
                        displayName: "Beat",
                    }
                ]
            });
            console.log(query);
        });

        it('should generate a find query with regular expressions', () => {
            const query = generator.createFindAll({
                displayName: /John/g
            });
            console.log(query);
        });

        it('should generate a find query with array matching', () => {
            const query = generator.createFindAll({
                displayName: /John/g
            });
            console.log(query);
        });
    });

    describe('update', () => {

    });

    describe('insert', () => {

    });

    describe('delete', () => {

    });
        
});
