// 04 Easy Pick
// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

type MyPick<T, K extends string | number | symbol> = {
    [key in keyof T as K]: T[key]
}

type MyPickForeign<T, K extends keyof T> = {
    [key in K]: T[key]
}

// 07 Easy Readonly
// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md

type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
}

interface Todo {
    title: string
    description: string,
    age: number
}

const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar",
    age: 10
}

// 011 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md


type TupleToObject<T extends readonly (string | number)[]> = {
    [Key in T[number]]: Key
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// 013 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

type First<T extends (string | number)[]> = T extends [] ? never : T[0]

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<arr3> // expected to be never

// 018 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md

type Length<T extends any[]> = T['length']

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5

//  043 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

type MyExclude<T, U> = T extends U ? never : T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

// 189 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

type MyAwaited<T extends Promise<any>> = T extends Promise<infer K> ? K : never // TODO: Fix

type ExampleType = Promise<Promise<string | number>>

type Res = MyAwaited<ExampleType> // string

// 268 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

type If<C extends boolean, T, F> = C extends true ? T : F

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

// 533 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md

type Concat<T extends readonly unknown[], K extends readonly unknown[]> = [...T, ...K]

type ConcatResult = Concat<[1], [2]> // expected to be [1, 2]

// 898 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md

type Includes<T extends (any)[], K extends any> = K extends T[number] ? true : false // TODO: Fix

type isPillarMen = Includes<['Kars', 'Esidisi', 2, 'Santana'], 3> // expected to be `false`

type T1 = Includes<[boolean, 2, 3, 5, 6, 7], false> //expected to be false
type T2 = Includes<[true, 2, 3, 5, 6, 7], boolean> //expected to be  false
type T3 = Includes<[{}], { a: 'A' }> //expected to be false
type T4 = Includes<[{ a: 'A' }], { readonly a: 'A' }> //expected to be false
type T5 = Includes<[{ readonly a: 'A' }], { a: 'A' }> //expected to be false
type T6 = Includes<[1], 1 | 2> //expected to be false
type T7 = Includes<[1 | 2], 1> //expected to be false


// 3057 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md

type Push<T extends any[], K> = [...T, K]

type Push1 = Push<[1, 2], '3'> // [1, 2, '3']
type Push2 = Push<[], 1>
type Push3 = Push<[1, 2], '3'>
type Push4 = Push<['1', 2, '3'], boolean>

// 3060 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md

type Unshift<T extends any[], K> = [K, ...T]
type Unshift1 = Unshift<[1, 2], 0> // [0, 1, 2,]

// 3312 Easy
// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md

type MyParameters<T> = any
const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]