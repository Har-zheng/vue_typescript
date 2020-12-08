# vue_ts

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 简单记录vue2 v-model  自定义方式
<p>
  <my-component v-model='val'/>
  <input type='text' :value='value' @input='updateInput'/>
  props: {
    value: String
  }
  methods: {
    updateInput(e) {
      this.$emit('input', e.target.value)
    }
  }

  // 非同寻常的表单
  <input type='checkbox' :checked='checked' @change='updeateInput'>
   props: {
     checked: Boolen
   },
   model: {
     prop: 'checked',
     envent: 'change'
   },
   methods: {
     updeateInput(e){
       this.$emit('change', e.target.checked)
     }
   }
</p>
### vue3 compile 以后的节后
```javascript
  <my-component v-model='foo' />
  h(Comp, {
    modelValue: foo,
    'onUpdate:modelValue': value => (foo = value)
  })
```

