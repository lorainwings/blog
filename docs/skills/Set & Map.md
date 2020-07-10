# Set & Map

## 简介

ES6 提供了新的数据结构,平时用得少, 总是搞忘, 所以算是一个记录

- **Set**: 它类似于数组，但是成员的值都是唯一的，没有重复的值
- **WeakSet**: 弱化版的 Set, 对象都是弱引用, 不影响 GC 的回收
- **Map**: Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现
- **WeakMap**: 弱化版的 Map, 对象都是弱引用, 不影响 GC 的回收

## Set

Set 是构造函数, 参数接受一个数组, 数组成员可以是原始类型也可以是引用类型

```js
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
```

Set 包含的实例方法及属性：

- `Set.prototype.constructor`：构造函数，默认就是 Set 函数
- `Set.prototype.size`：返回 Set 实例的成员总数
- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为 Set 的成员
- `Set.prototype.clear()`：清除所有成员，没有返回值
- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员,

无法通过遍历来直接修改原来的 set 结构,只能映射一个新的重新赋值回去

```js
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
```

## WeakSet

WeakSet 的成员只能是对象，而不能是其他类型的值, 且每个元素的引用都是弱引用, 会被 GC 回收

```js
const a = [
  [1, 2],
  [3, 4]
];
const ws = new WeakSet(a);
```

WeakSet 结构有以下三个方法。

- `WeakSet.prototype.add(value)`：向 WeakSet 实例添加一个新成员。
- `WeakSet.prototype.delete(value)`：清除 WeakSet 实例的指定成员。
- `WeakSet.prototype.has(value)`：返回一个布尔值，表示某个值是否在 - WeakSet 实例之中。

WeakSet 没有遍历方法以及 size 属性,因为是弱引用,随时引用都可是失效, 主要的作用是保存临时的引用, 例如储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏

## Map

ES6 提供了 Map 数据结构, 它是一种**值-值**的对应集合, 也可以认为是增强型的 Object, 可以通过两种方式添加元素

_1. 通过 set 方法添加_

```js
onst m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

_2. 通过构造函数一次性添加_

任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作 Map 构造函数的参数

```js
// 数组构造
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size; // 2
map.has('name'); // true
map.get('name'); // "张三"
map.has('title'); // true
map.get('title'); // "Author"

// set构造
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo'); // 1

// map构造
const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz'); // 3
```

Map 包含的实例方法及属性为:

- `Map.prototype.size`:属性返回 Map 结构的成员总数
- `Map.prototype.set(key, value)`:set 方法设置键名 key 对应的键值为 value，然后返回整个 Map 结构。如果 key 已经有值，则键值会被更新，否则就新生成该键
- `Map.prototype.get(key)`: get 方法读取 key 对应的键值，如果找不到 key，返回 undefined
- `Map.prototype.has(key)`: has 方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
- `Map.prototype.delete(key)`:delete 方法删除某个键，返回 true。如果删除失败，返回 false
- `Map.prototype.clear()`: clear 方法清除所有成员，没有返回值
- `Map.prototype.keys()`：返回键名的遍历器
- `Map.prototype.values()`：返回键值的遍历器
- `Map.prototype.entries()`：返回所有成员的遍历器
- `Map.prototype.forEach()`：遍历 Map 的所有成员

```js
//由于map[Symbol.iterator] === map.entries,以下两者等效
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"
```

注意 Map 的键名有非字符串，可以选择转为数组 JSON

```js
function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
mapToArrayJson(myMap);
// '[[true,7],[{"foo":3},["abc"]]]'
```

## WeakMap

WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名,WeakMap 的键名所指向的对象，不计入垃圾回收机制(键值不是弱引用)

```js
const map = new WeakMap();
map.set(1, 2);
// TypeError: 1 is not an object!
map.set(Symbol(), 2);
// TypeError: Invalid value used as weak map key
map.set(null, 2);
// TypeError: Invalid value used as weak map key
```

WeakMap 就是为了解决 Map 对象必须手动删除引用的问题而诞生的，它的键名所引用的对象都是弱引用, 主要用于 DOM 节点存储这种类似引用可能消失的内存回收模型,防止内存泄露

WeakMap 只有四个方法可用：`get()`、`set()`、`has()`、`delete()`,且没有遍历方法和`size属性`了
