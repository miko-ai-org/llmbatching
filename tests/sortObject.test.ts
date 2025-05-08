import { sortObject } from '../utils';

describe('sortObject', () => {

    test('sorts flat object keys alphabetically', () => {
        const input = { b: 1, a: 2, c: 3 };
        const output = sortObject(input);
        expect(Object.keys(output)).toEqual(['a', 'b', 'c']);
    });

    test('handles nested objects', () => {
        const input = {
            z: 1,
            a: { y: 2, x: 3 },
            m: { b: 1, a: 2 }
        };
        const output = sortObject(input);
        expect(Object.keys(output)).toEqual(['a', 'm', 'z']);
        expect(Object.keys(output.a)).toEqual(['x', 'y']);
        expect(Object.keys(output.m)).toEqual(['a', 'b']);
    });

    test('handles arrays without sorting them', () => {
        const input = [3, 1, 2];
        const output = sortObject(input);
        expect(output).toEqual([3, 1, 2]);
    });

    test('handles arrays with nested objects', () => {
        const input = [{ b: 1, a: 2 }, { d: 4, c: 3 }];
        const output = sortObject(input);
        expect(output[0]).toEqual({ a: 2, b: 1 });
        expect(output[1]).toEqual({ c: 3, d: 4 });
    });

    test('handles Date objects', () => {
        const date = new Date('2020-01-01T00:00:00Z');
        const input = { date };
        const output = sortObject(input);
        expect(output.date).toBe(date.toISOString());
    });

    test('handles BigInt', () => {
        const input = { big: 12345678901234567890n };
        const output = sortObject(input);
        expect(output.big).toBe('12345678901234567890');
    });

    test('handles Symbols as keys', () => {
        const symA = Symbol('a');
        const symB = Symbol('b');
        const input = { [symB]: 2, [symA]: 1 };
        const output = sortObject(input);
        const keys = Object.getOwnPropertySymbols(output);
        expect(keys.map(k => k.toString())).toEqual(['Symbol(a)', 'Symbol(b)']);
        expect(output[keys[0]]).toBe(1);
        expect(output[keys[1]]).toBe(2);
    });

    test('handles Maps', () => {
        const map = new Map();
        map.set('b', 2);
        map.set('a', 1);
        const output = sortObject({ map });
        expect(output.map).toEqual([['a', 1], ['b', 2]]);
    });

    test('handles Sets', () => {
        const set = new Set([3, 1, 2]);
        const output = sortObject({ set });
        expect(output.set).toEqual([3, 1, 2]);
    });

    test('skips functions', () => {
        const input = {
            a: 1,
            b: () => 2,
            c: function () { return 3; }
        };
        const output = sortObject(input);
        expect(output).toEqual({ a: 1 });
    });

    test('handles typed arrays', () => {
        const uint8 = new Uint8Array([3, 1, 2]);
        const input = { data: uint8 };
        const output = sortObject(input);
        expect(output.data).toEqual([3, 1, 2]);
    });

    test('handles circular references', () => {
        const obj: any = { a: 1 };
        obj.self = obj;
        const output = sortObject(obj);
        expect(output.self).toBe('[Circular]');
    });

    test('deeply nested structure', () => {
        const input = {
            z: [{ b: 2, a: 1 }, { d: 4, c: 3 }],
            a: {
                k: new Set([2, 1]),
                m: new Map([['z', 1], ['a', 2]]),
                date: new Date('2022-01-01T00:00:00Z'),
                big: BigInt(9999),
                fn: () => { },
            }
        };
        const output = sortObject(input);
        expect(output.z[0]).toEqual({ a: 1, b: 2 });
        expect(output.a.k).toEqual([2, 1]);
        expect(output.a.m).toEqual([['a', 2], ['z', 1]]);
        expect(output.a.date).toBe('2022-01-01T00:00:00.000Z');
        expect(output.a.big).toBe('9999');
        expect(output.a.fn).toBeUndefined();
    });

    // Additional tests

    test('handles null values', () => {
        const input = { a: null, b: 1, c: null };
        const output = sortObject(input);
        expect(output).toEqual({ a: null, b: 1, c: null });
    });

    test('handles undefined values', () => {
        const input = { a: undefined, b: 1 };
        const output = sortObject(input);
        expect(output).toEqual({ a: undefined, b: 1 });
    });

    test('handles empty objects', () => {
        const input = {};
        const output = sortObject(input);
        expect(output).toEqual({});
    });

    test('handles empty arrays', () => {
        const input: any[] = [];
        const output = sortObject(input);
        expect(output).toEqual([]);
    });

    test('handles mixed primitive types', () => {
        const input = {
            str: 'hello',
            num: 42,
            bool: true,
            nil: null,
            undef: undefined
        };
        const output = sortObject(input);
        expect(Object.keys(output)).toEqual(['bool', 'nil', 'num', 'str', 'undef']);
    });

    test('handles BigInt64Array and BigUint64Array', () => {
        if (typeof BigInt64Array !== 'undefined') {
            const bigInt64 = new BigInt64Array([1n, 2n, 3n]);
            const bigUint64 = new BigUint64Array([4n, 5n, 6n]);
            const input = { bigInt64, bigUint64 };
            const output = sortObject(input);
            expect(output.bigInt64).toEqual(['1', '2', '3']);
            expect(output.bigUint64).toEqual(['4', '5', '6']);
        }
    });

    test('handles complex circular references', () => {
        const objA: any = { name: 'A' };
        const objB: any = { name: 'B' };
        const objC: any = { name: 'C' };

        objA.ref = objB;
        objB.ref = objC;
        objC.ref = objA;

        const output = sortObject(objA);
        expect(output.name).toBe('A');
        expect(output.ref.name).toBe('B');
        expect(output.ref.ref.name).toBe('C');
        expect(output.ref.ref.ref).toBe('[Circular]');
    });

    test('handles Map with object keys', () => {
        const keyObj1 = { id: 1 };
        const keyObj2 = { id: 2 };
        const map = new Map();
        map.set(keyObj1, 'value1');
        map.set(keyObj2, 'value2');

        const output = sortObject({ map });
        expect(output.map.length).toBe(2);
        expect(output.map[0][0]).toEqual({ id: 1 });
        expect(output.map[1][0]).toEqual({ id: 2 });
    });

    test('handles numeric keys by sorting them as strings', () => {
        const input = { 10: 'ten', 2: 'two', 1: 'one' };
        const output = sortObject(input);
        expect(Object.keys(output)).toEqual(['1', '2', '10']);
    });

    test('handles nested Maps and Sets', () => {
        const nestedMap = new Map([['key', new Set([3, 2, 1])]]);
        const input = { nestedMap };
        const output = sortObject(input);
        expect(output.nestedMap).toEqual([['key', [3, 2, 1]]]);
    });
});
