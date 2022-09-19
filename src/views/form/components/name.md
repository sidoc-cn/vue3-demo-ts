```html
<el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
    <el-form-item label="" prop="name">
        <el-input v-model="" clearable />
    </el-form-item>
</el-form>
```

```javascript
const formRules = reactive<FormRules>({
    name: [
        { required: true, message: '请输入', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入3到5个字符', trigger: 'blur' },
    ],
});
```