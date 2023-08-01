// 2 Medium
// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md

type MyReturnType<T> = T extends (...args: any) => infer U ? U : T

const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"