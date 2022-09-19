```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="phone">
            <el-input v-model="" clearable />
        </el-form-item>
    </el-form>

```
```javascript
    const formRules = reactive<FormRules>({
        phone: [
            { required: true, message: '请选择',trigger: 'blur'},
            { pattern: regular.phone, message: '请输入正确的手机号', trigger: 'blur'},
        ],
    });
```