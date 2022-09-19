```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="decimal">
            <el-input v-model="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        decimal:[
            { pattern: regular.decimal, trigger: 'blur',message: "请输入小数，保留小数点后两位" },
            { required: true, message: '请输入' },
        ]
    });
```