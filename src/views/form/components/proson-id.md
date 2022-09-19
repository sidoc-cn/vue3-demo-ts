```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="prosonId">
            <el-input v-model="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        prosonId: [
            { pattern: regular.idCard, trigger: 'blur',message: '请输入正确的身份证号' },
            { required: true, message: '请选择',trigger: 'blur'},
        ],
    });
```