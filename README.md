# 03-ts-methods

### Пример работы функции

```javascript
(async function() {
  const isVisible = await visibilityChange(); // вернёт true/false, когда юзер изменит состояние активности вкладки
  const returned = await visible(); // вернёт true, когда юзер вернётся (или уже тут)
  const gone = await hidden(); // вернёт true, когда юзер уйдёт (или уже ушёл)
})()
```
