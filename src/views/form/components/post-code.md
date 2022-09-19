```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="postCode">
            <el-input v-model="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        postCode:[
            { pattern: regular.postCode, trigger: 'blur',message: "请输入正确的邮编" },
            { required: true, message: '请输入' },
        ],
    });
```