```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="number">
            <el-input v-model.number="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        number: [
            { required: true, message: '请输入' },
            { type: 'number', message: '请输入数字' }
        ],
    });
```
