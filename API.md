## Functions

<dl>
<dt><a href="#compose">compose(...functions)</a> ⇒ <code>function</code></dt>
<dd><p>组合多个函数，顺序执行，前一个函数的输出作为后一个函数的输入；
类似 functional programming 的 compose</p>
</dd>
<dt><a href="#any">any(...functions)</a> ⇒ <code>function</code></dt>
<dd><p>组合多个函数，任意一个函数返回即可。</p>
</dd>
<dt><a href="#curry">curry(fn)</a> ⇒ <code>function</code></dt>
<dd><p>柯里化函数</p>
</dd>
</dl>

<a name="compose"></a>

## compose(...functions) ⇒ <code>function</code>
组合多个函数，顺序执行，前一个函数的输出作为后一个函数的输入；
类似 functional programming 的 compose

**Kind**: global function  
**Returns**: <code>function</code> - 组合后的新函数  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function</code> | 多个函数 |

<a name="any"></a>

## any(...functions) ⇒ <code>function</code>
组合多个函数，任意一个函数返回即可。

**Kind**: global function  
**Returns**: <code>function</code> - 组合后的新函数  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function</code> | 多个函数 |

<a name="curry"></a>

## curry(fn) ⇒ <code>function</code>
柯里化函数

**Kind**: global function  
**Returns**: <code>function</code> - 柯里化后的函数  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 需要被柯里化的函数 |

