```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="email">
            <el-input v-model="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        email:[
            { required: true, message: '请输入' },
            { type: 'email', message: '请输入正确的邮箱',trigger: 'blur' }
        ],
    });
```