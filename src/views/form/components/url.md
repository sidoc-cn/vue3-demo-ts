```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="url">
            <el-input v-model="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        url:[
            { required: true, message: '请输入' },
            { type: 'url', message: '请输入正确的url',trigger: 'blur',},
        ],
    });
```